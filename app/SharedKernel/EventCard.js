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
  propStyle: {}
});

export default function EventCard(props) {
  props.style ? (styles.propStyle = props.style) : (styles.propStyle = {});
  return (
    <TouchableHighlight
      underlayColor={ProjectColors.selectColor}
      onPress={props.onPress}
    >
      <View style={[styles.card, CommonStyles.shadowBox, styles.propStyle]}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
}

EventCard.propTypes = {
  onPress: PropTypes.func.isRequired
};
