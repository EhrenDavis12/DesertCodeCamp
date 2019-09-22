import React from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

function About({ navigation }) {
  return (
    <FullScrollView navigation={navigation}>
      <View style={[CommonStyles.card, CommonStyles.shadowBox]}>
        <Text style={CommonStyles.text}>Code Camp About page</Text>
        <Text style={CommonStyles.text}>more stuff</Text>
        <Text style={CommonStyles.text}>how About this!!</Text>
        <Text style={CommonStyles.text}>(Pun intended)</Text>
      </View>
    </FullScrollView>
  );
}

export default About;
