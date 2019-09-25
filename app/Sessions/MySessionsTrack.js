import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import { testGetMyInterestedInSessionsByUserId } from "../API/api";
import SessionsView from "./SessionsView";
import { CleanSessionData } from "../SharedKernel/CleanFilterData";
import { buildSessionList } from "./BuildSessionJsx";

const _ = require("underscore");

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

  return <SessionsView navigation={navigation} sessionJSX={mySessionsJSX} />;
}

export default withStore(Sessions);
