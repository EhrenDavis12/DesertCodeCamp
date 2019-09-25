import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import SessionsView from "./SessionsView";
import { buildSessionList } from "./BuildSessionJsx";
import { GetSessionDataByTrack } from "../SharedKernel/CleanFilterData";

function Sessions({ navigation, store }) {
  handleSelectedSession = session => () => {
    navigation.navigate("sessionDetails", { session });
  };

  const trackId = navigation.getParam("track", "").TrackId;
  const [sessionsJSX, setSessionsJSX] = useState(
    buildSessionList(
      store.get(`sessionsTrack_${trackId}`),
      "Time",
      handleSelectedSession
    )
  );

  setSessions = sessions => {
    sessions = GetSessionDataByTrack(trackId, sessions);
    store.set(`sessionsTrack_${trackId}`, sessions);
    setSessionsJSX(buildSessionList(sessions, "Time", handleSelectedSession));
  };

  useEffect(() => {
    setSessions(store.get(`sessions`));
  }, []);

  return <SessionsView navigation={navigation} sessionJSX={sessionsJSX} />;
}

export default withStore(Sessions);
