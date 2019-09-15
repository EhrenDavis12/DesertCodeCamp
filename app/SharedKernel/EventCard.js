import React from "react";
import { View, StyleSheet } from "react-native";
// import PropTypes from "prop-types";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 7,
    textAlign: "left"
  }
});

export default function EventCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.title}>{props.children}</View>
    </View>
  );
}

// EventCard.propTypes = {
//   item: PropTypes.shape({
//     Name: PropTypes.string.isRequired
//   })
//   event: PropTypes.func
// };
