import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import { testGetTracksByConferenceId } from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

const fileName = `../DB_files/TracksDB.json`;

function Tracks({ navigation }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(require(fileName));
    // testGetTracksByConferenceId().then(result => {
    //   setTracks(result);
    // });
  }, []);

  handleSelectedTrack = track => {
    navigation.navigate("sessions", { track });
  };
  // event={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="flatlist"
        data={tracks}
        style={CommonStyles.list}
        renderItem={({ item }) => (
          <EventCard onPress={() => handleSelectedTrack(item)}>
            <Text style={CommonStyles.text}>{item.Name}</Text>
          </EventCard>
        )}
        keyExtractor={item => `task_${item.TrackId}`}
      />
    </FullScrollView>
  );
}

export default Tracks;
