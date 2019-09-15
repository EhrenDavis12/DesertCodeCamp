import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Moment from "moment";
import CommonStyles, { ProjectColors } from "./CommonStyles";

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  text: {
    color: ProjectColors.darkText
  }
});

export default function OutSideDate(props) {
  let startTime = props.start.slice(11);
  startTime = Moment(startTime, "HH:mm").format("hh:mm a");
  let endTime = props.end.slice(11);
  endTime = Moment(endTime, "HH:mm").format("hh:mm a");
  const renderText = `${startTime} - ${endTime}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{renderText}</Text>
    </View>
  );
}

OutSideDate.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};
