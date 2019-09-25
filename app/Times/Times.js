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
import { withStore } from "../SharedKernel/HOC/Store";
import { testGetTimesByConferenceId } from "../API/api";

const _ = require("underscore");
const fileName = `../DB_files/TimesData.json`;

function Times({ navigation, store }) {
  const [time, setTime] = useState(store.get("time"));
  // let timeData = require(fileName);
  sortTime = unSortedTime =>
    _.sortBy(unSortedTime, time => {
      return time.StartTime;
    });

  useEffect(() => {
    if (!time)
      testGetTimesByConferenceId().then(result => {
        let sortedTime = sortTime(result);
        store.set("time", sortedTime);
        setTime(sortedTime);
      });
  }, []);

  handleSelectedTime = time => {
    navigation.navigate("sessionsTime", { time });
  };

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="flatlist"
        data={time}
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

export default withStore(Times);
