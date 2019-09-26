import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import { testGetMyInterestedInSessionsByUserId } from "../API/api";
import FlatListView from "../SharedKernel/FlatListView";
import { buildSessionList } from "./BuildSessionJsx";

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
        setMySessionsJSX(
          buildSessionList(results, "Time", handleSelectedSession)
        );
        store.set("mySessions", results);
      });
  }, []);

  return (
    <FlatListView navigation={navigation} renderArrayJSX={mySessionsJSX} />
  );
}

export default withStore(Sessions);
