import React from "react";
import { Text } from "react-native";

import BasicCard from "../SharedKernel/BasicCard";
import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

function About({ navigation }) {
  handleLoadApplication = () => () => {
    navigation.navigate("loadApplication");
  };

  return (
    <FullScrollView navigation={navigation}>
      <BasicCard>
        <Text style={CommonStyles.text}>
          We failed to make a connection to our server
        </Text>
      </BasicCard>

      <EventCard onPress={handleLoadApplication()}>
        <Text style={CommonStyles.text}>
          Try to connect again. (Click here)
        </Text>
      </EventCard>
    </FullScrollView>
  );
}

export default About;
