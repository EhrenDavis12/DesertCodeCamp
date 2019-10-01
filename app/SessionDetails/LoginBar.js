import React from "react";
import { Text } from "react-native";

import EventCard from "../SharedKernel/EventCard";

function LoginBar({ navigation }) {
  handleSelected = () => () => {
    navigation.navigate("loginForm");
  };

  return (
    <EventCard onPress={handleSelected()}>
      <Text style={CommonStyles.text}>
        Login to Favor this session! (click here)
      </Text>
    </EventCard>
  );
}

export default LoginBar;
