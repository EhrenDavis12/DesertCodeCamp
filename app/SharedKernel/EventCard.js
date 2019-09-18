import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import CommonStyles, { ProjectColors } from "./CommonStyles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: ProjectColors.whiteColor,
    // flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 5
  },
  shadowBox: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: ProjectColors.borderColor,
    borderBottomWidth: 4,
    borderRightWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});

export default function EventCard(props) {
  return (
    <TouchableHighlight
      underlayColor={ProjectColors.selectColor}
      onPress={props.onPress}
    >
      <View style={[styles.card, styles.shadowBox]}>{props.children}</View>
    </TouchableHighlight>
  );
}

EventCard.propTypes = {
  onPress: PropTypes.func.isRequired
};
