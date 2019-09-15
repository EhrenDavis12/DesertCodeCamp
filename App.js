import React from "react";
import { StackNavigator } from "react-navigation";

import Tracks from "./app/Tracks/Tracks";
import TestCss from "./app/TestCss/TestCss";
import Sessions from "./app/Sessions/Sessions";

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
  }
});
