import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import CommonStyles from "./CommonStyles";

export default function FullScrollView(props) {
  return (
    <SafeAreaView style={CommonStyles.mainContainer}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
  );
}
