import React from "react";
import { StackNavigator } from "react-navigation";

import Tracks from "./app/Tracks/Tracks";
import TestCss from "./app/TestCss/TestCss";
import Sessions from "./app/Sessions/Sessions";
import SessionDetails from "./app/SessionDetails/SessionDetails";

export default StackNavigator({
  // testCss: {
  //   screen: TestCss,
  //   navigationOptions: () => ({
  //     title: "TestCss"
  //   })
  // }
  tracks: {
    screen: Tracks,
    navigationOptions: () => ({
      title: "Tracks"
    })
  },
  sessions: {
    screen: Sessions,
    navigationOptions: value => {
      const track = value.navigation.getParam("track", "");
      return {
        title: `Session: ${track.Name}`
      };
    }
  },
  sessionDetails: {
    screen: SessionDetails,
    navigationOptions: () => ({
      title: "Session Details"
    })
  }
});
