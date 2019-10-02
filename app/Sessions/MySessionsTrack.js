import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import { testGetMyInterestedInSessionsByUserId } from "../API/api";
import FlatListView from "../SharedKernel/FlatListView";
import { buildSessionList } from "./BuildSessionJsx";
import LoadingJsx from "../SharedKernel/LoadingJsx";

function Sessions({ navigation, store }) {
  handleSelectedSession = session => () => {
    navigation.navigate("sessionDetails", { session });
  };

  const [mySessionsJSX, setMySessionsJSX] = useState(
    buildSessionList(store.get("mySessions"), "Time", handleSelectedSession)
  );

  useEffect(() => {
    const user = store.get("user");
    const userId = user ? user.UserId : null;
    if (userId)
      testGetMyInterestedInSessionsByUserId(userId).then(results => {
        if (results.length > 0) {
          setMySessionsJSX(
            buildSessionList(results, "Time", handleSelectedSession)
          );
          store.set("mySessions", results);
        } else {
          setMySessionsJSX(
            LoadingJsx(
              "You currently do not have any sessions marked as interested."
            )
          );
        }
      });
  }, []);

  return (
    <FlatListView navigation={navigation} renderArrayJSX={mySessionsJSX} />
  );
}

export default withStore(Sessions);
