import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CommonStyles, { ProjectColors } from "./CommonStyles";

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  text: {
    color: ProjectColors.darkText,
    fontWeight: "bold"
  }
});

export default function OutSideCardHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}
