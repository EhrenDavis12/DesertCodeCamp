import React from "react";
import { Text } from "react-native";

// import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";

const _ = require("underscore");

function SessionDetails({ navigation }) {
  const details = navigation.getParam("session", {});

  // get the session details,
  // including name, abstract, presenter(s), room and time.
  const { Name, Abstract, Presenters, Room, Time } = details;
  debugger;

  return <Text style={CommonStyles.text}>{Name}</Text>;
}

export default SessionDetails;
