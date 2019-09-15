import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import { testGetTracksByConferenceId } from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";

const fileName = `./TracksDB.json`;
const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3"
  }
});

function Tracks({ navigation }) {
  const [tracks, setTracks] = useState([]);

  async function getTrackData() {
    let trackDB = require(fileName);
    setTracks(trackDB);

    // testGetTracksByConferenceId().then(result => {
    //   setTracks(result);
    // });
  }

  useEffect(() => {
    getTrackData();
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
      style={styles.list}
      renderItem={({ item }) => (
        <EventCard>
          <Text onPress={() => handleSelectedTrack(item.TrackId)}>
            {item.Name}
          </Text>
        </EventCard>
      )}
      keyExtractor={item => `task_${item.TrackId}`}
    />
  ];
}

export default Tracks;
