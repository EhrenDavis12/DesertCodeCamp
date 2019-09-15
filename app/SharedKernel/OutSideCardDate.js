import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Moment from "moment";
import CommonStyles, { ProjectColors } from "./CommonStyles";
import OutSideCardHeader from "./OutSideCardHeader";

export default function OutSideCardDate(props) {
  let startTime = props.start.slice(11);
  startTime = Moment(startTime, "HH:mm").format("hh:mm a");
  let endTime = props.end.slice(11);
  endTime = Moment(endTime, "HH:mm").format("hh:mm a");
  const renderText = `${startTime} - ${endTime}`;

  return <OutSideCardHeader>{renderText}</OutSideCardHeader>;
}

OutSideCardDate.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};
