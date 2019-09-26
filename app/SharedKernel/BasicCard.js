import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import CommonStyles, { ProjectColors } from "./CommonStyles";

const styles = StyleSheet.create({
  propStyle: {}
});

export default function BasicCard(props) {
  props.style ? (styles.propStyle = props.style) : (styles.propStyle = {});
  return (
    <View style={[CommonStyles.card, CommonStyles.shadowBox, styles.propStyle]}>
      {props.children}
    </View>
  );
}
