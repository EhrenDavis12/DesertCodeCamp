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

const _ = require("underscore");

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

  handleSelectedSession = session => {
    Alert.alert(`Simple Button pressed: ${session.Name}`);
    navigation.navigate("sessionDetails", { session });
  };

  return [
    <FlatList
      key="flatlist"
      data={sessions}
      style={CommonStyles.list}
      renderItem={({ item }) => (
        <View>
          <OutSideCardDate
            start={item.Time.StartDate}
            end={item.Time.EndDate}
          />
          <EventCard onPress={() => handleSelectedSession(item)}>
            <Text style={CommonStyles.text}>{item.Name}</Text>
          </EventCard>
        </View>
      )}
      keyExtractor={item => `Sessions_${item.SessionId}`}
    />
  ];
}

export default Sessions;
