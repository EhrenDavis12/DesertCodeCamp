import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import {
  testGetAmIInterestedInSessionByUserId,
  updateSessionsInterested
} from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import Icon from "../Icons/Icons";

function FavoriteBar({ activeUser, sessionId }) {
  const [iconName, setIconName] = useState("favoriteBorder");

  useEffect(() => {
    testGetAmIInterestedInSessionByUserId(activeUser.UserId, sessionId).then(
      result => {
        result ? setIconName("favorite") : setIconName("favoriteBorder");
      }
    );
  }, []);

  handleFavoriteSession = () => {
    const interested = iconName === "favoriteBorder";
    updateSessionsInterested(sessionId, activeUser.UserId, interested).then(
      result => {
        if (result)
          iconName === "favoriteBorder"
            ? setIconName("favorite")
            : setIconName("favoriteBorder");
      }
    );
  };

  return (
    <EventCard onPress={() => handleFavoriteSession()}>
      <View style={{ flexDirection: "row" }}>
        <Text style={CommonStyles.text}>Favor this session!</Text>
        <Icon style={{ marginLeft: "auto" }} name={iconName} />
      </View>
    </EventCard>
  );
}

export default withStore(FavoriteBar);
