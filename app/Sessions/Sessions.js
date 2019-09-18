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
import OutSideCardDate from "../SharedKernel/OutSideCardDate";
import SessionDetails from "../SessionDetails/SessionDetails";
import CleanSessionData from "./CleanSessionData";
import FullScrollView from "../SharedKernel/FullScrollView";

const _ = require("underscore");

function Sessions({ navigation }) {
  const [sessions, setSessions] = useState([]);
  const trackId = navigation.getParam("track", "").TrackId;

  getDataByFile = () => {
    setSessions(
      CleanSessionData(trackId, require(`../DB_files/SessionsDB.json`))
    );
  };

  gitDataByAPI = () => {
    testGetSessionsByConferenceId().then(result =>
      setSessions(CleanSessionData(trackId, result))
    );
  };

  useEffect(() => {
    getDataByFile();
    // gitDataByAPI();
  }, []);

  handleSelectedSession = session => {
    // Alert.alert(`Simple Button pressed: ${session.Name}`);
    navigation.navigate("sessionDetails", { session });
  };

  generateGroupedSessionList = list => {
    let lastTimeStart = "";
    let lastTimeEnd = "";
    return list.map(item => {
      let resultsJSX;
      if (
        item.Time.StartDate !== lastTimeStart ||
        item.Time.EndDate !== lastTimeEnd
      ) {
        resultsJSX = (
          <OutSideCardDate
            start={item.Time.StartDate}
            end={item.Time.EndDate}
          />
        );
        lastTimeStart = item.Time.StartDate;
        lastTimeEnd = item.Time.EndDate;
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

  return (
    <FullScrollView>
      <FlatList
        key="flatlist"
        data={generateGroupedSessionList(sessions)}
        style={CommonStyles.list}
        renderItem={({ item }) => <View>{item.resultsJSX}</View>}
        keyExtractor={item => `Render_${item.itemKey}`}
      />
    </FullScrollView>
  );
}

export default Sessions;
