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
import { GetSessionDataByTime } from "../SharedKernel/CleanFilterData";

const _ = require("underscore");

const generateGroupedSessionList = list => {
  let lastTrackId = "";
  return list.map(item => {
    let resultsJSX;
    if (item.Track.TrackId !== lastTrackId) {
      resultsJSX = <OutSideCardHeader>{item.Track.Name}</OutSideCardHeader>;
      lastTrackId = item.Track.TrackId;
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
  const timeId = navigation.getParam("time", "").TimeId;
  const sessionsDB = require(`../DB_files/SessionsDB.json`);
  const sessions = GetSessionDataByTime(timeId, sessionsDB);
  const renderSessions = generateGroupedSessionList(sessions);

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
