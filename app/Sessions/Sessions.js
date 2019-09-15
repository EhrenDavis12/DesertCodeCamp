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

const _ = require("underscore");

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3"
  },
  startDate: {
    backgroundColor: "blue"
  },
  endDate: {
    // textAlign: "right",
    alignSelf: "flex-end",
    backgroundColor: "red",
    position: "absolute"
  },
  name: {
    backgroundColor: "green"
  }
});

function Sessions({ navigation }) {
  const [sessions, setSessions] = useState([]);
  const trackId = navigation.getParam("trackId", "");

  useEffect(() => {
    let defaultTime = {
      StartDate: "2019-01-01T12:00:00",
      EndDate: "2019-01-01T13:00:00"
    };
    let result = require(`./SessionsDB.json`).map(e => ({
      ...e,
      Time: defaultTime
    }));
    let sessionsByTrackId = _.filter(result, obj => {
      return _.some([obj.Track], { TrackId: trackId });
    });

    // testGetSessionsByConferenceId().then(result => {
    //   let sessionsByTrackId = _.filter(result, obj => {
    //     return _.some([obj.Track], { TrackId: trackId });
    //   });
    //   // let SessionsSort = _.sortBy(sessionsByTrackId, session => {
    //   //   return session.Time.StartDate;
    //   // });
    //   setSessions(sessionsByTrackId);
    // });

    setSessions(sessionsByTrackId);
  }, []);

  // handleAddEvent = () => {
  //   navigation.navigate("tracks");
  // };

  return [
    <FlatList
      key="flatlist"
      data={sessions}
      style={styles.list}
      renderItem={({ item }) => (
        <EventCard>
          <Text
            onPress={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}
          >
            <Text style={styles.startDate}>{item.Time.StartDate}</Text>
            <Text style={styles.endDate}>{item.Time.EndDate}</Text>
            {/* <Text style={styles.name}>{item.Name}</Text> */}
          </Text>
        </EventCard>
      )}
      keyExtractor={item => `Sessions_${item.SessionId}`}
    />
  ];
}

export default Sessions;
