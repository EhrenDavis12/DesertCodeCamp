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
import { testGetSessionsByConferenceId } from "../API/api";

import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import SessionDetails from "../SessionDetails/SessionDetails";
import FullScrollView from "../SharedKernel/FullScrollView";
import { GetSessionDataByTrack } from "../SharedKernel/CleanFilterData";

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

function Sessions({ navigation }) {
  // const [sessions, setSessions] = useState([]);
  const trackId = navigation.getParam("track", "").TrackId;
  const sessionsDB = require(`../DB_files/SessionsDB.json`);
  const sessions = GetSessionDataByTrack(trackId, sessionsDB);
  const renderSessions = generateGroupedSessionList(sessions);

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

export default Sessions;
