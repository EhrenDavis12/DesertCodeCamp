import React, { useState, useEffect } from "react";
import {
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import { withStore } from "../SharedKernel/HOC/Store";

import {
  testGetSessionsByConferenceId,
  testGetMyInterestedInSessionsByUserId
} from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import SessionDetails from "../SessionDetails/SessionDetails";
import FullScrollView from "../SharedKernel/FullScrollView";
import {
  GetSessionDataByTrack,
  CleanSessionData
} from "../SharedKernel/CleanFilterData";

const _ = require("underscore");

const generateGroupedSessionList = list => {
  let lastTimeName = "";
  return list.map(item => {
    let resultsJSX;
    if (item.Time.Name !== lastTimeName) {
      resultsJSX = <OutSideCardHeader>{item.Time.Name}</OutSideCardHeader>;
      lastTimeName = item.Time.Name;
    }
    resultsJSX = (
      <View key={`Sessions_${item.SessionId}`}>
        {resultsJSX}
        <EventCard onPress={() => handleSelectedSession(item)}>
          <Text style={CommonStyles.text}>{item.Name}</Text>
        </EventCard>
      </View>
    );
    return { resultsJSX, itemKey: `Sessions_${item.SessionId}` };
  });
};

function Sessions({ navigation, store }) {
  const [renderSessions, setRenderSessions] = useState([]);

  useEffect(() => {
    const trackId = navigation.getParam("track", "").TrackId;
    // const userId = navigation.getParam("user", "").UserId;
    const user = store.get("user");
    const userId = user ? store.get("user").UserId : 0;
    let sessions = [];
    if (trackId) {
      sessions = require(`../DB_files/SessionsDB.json`);
      sessions = GetSessionDataByTrack(trackId, sessions);
      setRenderSessions(generateGroupedSessionList(sessions));
    }
    if (userId)
      testGetMyInterestedInSessionsByUserId(userId).then(results => {
        // debugger;
        sessions = CleanSessionData(results);
        setRenderSessions(generateGroupedSessionList(sessions));
      });
  }, []);

  // getDataByFile = () => {
  //   setSessions(
  //     CleanSessionData(trackId, require(`../DB_files/SessionsDB.json`))
  //   );
  // };

  // gitDataByAPI = () => {
  //   testGetSessionsByConferenceId().then(result =>
  //     setSessions(CleanSessionData(trackId, result))
  //   );
  // };

  // useEffect(() => {
  //   getDataByFile();
  //   // gitDataByAPI();
  // }, []);

  handleSelectedSession = session => {
    navigation.navigate("sessionDetails", { session });
  };

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="flatlist"
        data={renderSessions}
        style={CommonStyles.list}
        renderItem={({ item }) => <View>{item.resultsJSX}</View>}
        keyExtractor={item => `Render_${item.itemKey}`}
      />
    </FullScrollView>
  );
}

export default withStore(Sessions);
