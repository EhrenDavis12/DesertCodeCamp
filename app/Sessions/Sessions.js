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
import OutSideDate from "../SharedKernel/OutSideDate";

const _ = require("underscore");

const styles = StyleSheet.create({
  // startDate: {
  //   backgroundColor: "blue"
  // },
  // endDate: {
  //   marginLeft: "auto",
  //   backgroundColor: "red"
  // },
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
      style={CommonStyles.list}
      renderItem={({ item }) => (
        <View>
          {/* <View style={{ flexDirection: "row" }}>
            <Text style={styles.startDate}>{item.Time.StartDate}</Text>
            <Text style={styles.endDate}>{item.Time.EndDate}</Text>
          </View> */}
          <OutSideDate start={item.Time.StartDate} end={item.Time.EndDate} />
          <EventCard
            onPress={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}
          >
            <Text style={CommonStyles.text}>{item.Name}</Text>
          </EventCard>
        </View>
      )}
      keyExtractor={item => `Sessions_${item.SessionId}`}
    />
  ];
}

export default Sessions;
