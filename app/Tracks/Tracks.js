import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import { testGetTracksByConferenceId } from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";
import CommonStyles from "../SharedKernel/CommonStyles";

const fileName = `./TracksDB.json`;

function Tracks({ navigation }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let trackDB = require(fileName);
    setTracks(trackDB);
    // testGetTracksByConferenceId().then(result => {
    //   setTracks(result);
    // });
  }, []);

  handleSelectedTrack = trackId => {
    // Alert.alert(`Simple Button pressed: ${trackId}`);
    navigation.navigate("sessions", { trackId });
  };
  // event={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}

  return [
    <FlatList
      key="flatlist"
      data={tracks}
      style={CommonStyles.list}
      renderItem={({ item }) => (
        <EventCard onPress={() => handleSelectedTrack(item.TrackId)}>
          <Text style={CommonStyles.text}>{item.Name}</Text>
        </EventCard>
      )}
      keyExtractor={item => `task_${item.TrackId}`}
    />
  ];
}

export default Tracks;
