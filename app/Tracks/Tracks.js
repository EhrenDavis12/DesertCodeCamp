import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";
import { withStore } from "../SharedKernel/HOC/Store";

const _ = require("underscore");

sortTracks = unSortedTracks =>
  _.sortBy(unSortedTracks, track => {
    return track.Name;
  });

function Tracks({ navigation, store }) {
  const [tracks, setTracks] = useState(sortTracks(store.get("tracks")));

  handleSelectedTrack = track => () => {
    navigation.navigate("sessionsTrack", { track });
  };
  // event={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="flatlist"
        data={tracks}
        style={CommonStyles.list}
        renderItem={({ item }) => (
          <EventCard onPress={handleSelectedTrack(item)}>
            <Text style={CommonStyles.text}>{item.Name}</Text>
          </EventCard>
        )}
        keyExtractor={item => `task_${item.TrackId}`}
      />
    </FullScrollView>
  );
}

export default withStore(Tracks);
