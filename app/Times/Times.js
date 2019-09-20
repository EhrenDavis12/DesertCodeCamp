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

import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import { CleanSessionData, GetTimeData } from "../SharedKernel/CleanFilterData";
import FullScrollView from "../SharedKernel/FullScrollView";
// import { testGetTimesByConferenceId } from "../API/api";

const _ = require("underscore");
const fileName = `../DB_files/TimesData.json`;

function Times({ navigation }) {
  // const [sessions, setSessions] = useState([]);
  let timeData = require(fileName);
  timeData = _.sortBy(timeData, time => {
    return time.StartTime;
  });

  handleSelectedTime = time => {
    navigation.navigate("sessionsTime", { time });
  };

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="flatlist"
        data={timeData}
        style={CommonStyles.list}
        renderItem={({ item }) => (
          <EventCard onPress={() => handleSelectedTime(item)}>
            <Text style={CommonStyles.text}>{item.Name}</Text>
          </EventCard>
        )}
        keyExtractor={item => `TimeID_${item.TimeId}`}
      />
    </FullScrollView>
  );
}

export default Times;
