import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import FlatListView from "../SharedKernel/FlatListView";
import { buildSessionList } from "./BuildSessionJsx";
import { GetSessionDataByTime } from "../SharedKernel/CleanFilterData";

function Sessions({ navigation, store }) {
  handleSelectedSession = session => () => {
    navigation.navigate("sessionDetails", { session });
  };

  const timeId = navigation.getParam("time", "").TimeId;
  const [sessionsJSX, setSessionsJSX] = useState(
    buildSessionList(
      store.get(`sessionsTime_${timeId}`),
      "Track",
      handleSelectedSession
    )
  );

  setSessions = sessions => {
    sessions = GetSessionDataByTime(timeId, sessions);
    store.set(`sessionsTime_${timeId}`, sessions);
    setSessionsJSX(buildSessionList(sessions, "Track", handleSelectedSession));
  };

  useEffect(() => {
    setSessions(store.get(`sessions`));
  }, []);

  return <FlatListView navigation={navigation} renderArrayJSX={sessionsJSX} />;
}

export default withStore(Sessions);
