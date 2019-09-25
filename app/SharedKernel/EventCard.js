import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import CommonStyles, { ProjectColors } from "./CommonStyles";
import BasicCard from "./BasicCard";

export default function EventCard(props) {
  const [fireOnPress, setFireOnPress] = useState(false);

  const onPress = () => {
    !fireOnPress ? props.onPress() : setFireOnPress(true);
  };

  return (
    <TouchableHighlight
      underlayColor={ProjectColors.selectColor}
      onPress={onPress}
    >
      <BasicCard style={props.style}>{props.children}</BasicCard>
    </TouchableHighlight>
  );
}
onPress = EventCard.propTypes = {
  onPress: PropTypes.func.isRequired
};
