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
    navigationOptions: () => ({
      title: "Sessions"
    })
  },
  sessionDetails: {
    screen: SessionDetails,
    navigationOptions: () => ({
      title: "SessionDetails"
    })
  }
});
