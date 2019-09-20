import React from "react";
import { StackNavigator } from "react-navigation";

import Tracks from "./app/Tracks/Tracks";
import TestCss from "./app/TestCss/TestCss";
import SessionsTrack from "./app/Sessions/SessionsTrack";
import SessionsTime from "./app/Sessions/SessionsTime";
import SessionDetails from "./app/SessionDetails/SessionDetails";
import MainMenu from "./app/MainMenu/MainMenu";
import Times from "./app/Times/Times";

export default StackNavigator({
  // testCss: {
  //   screen: TestCss,
  //   navigationOptions: () => ({
  //     title: "TestCss"
  //   })
  // }
  mainMenu: {
    screen: MainMenu,
    navigationOptions: () => ({
      title: "Main Menu"
    })
  },
  tracks: {
    screen: Tracks,
    navigationOptions: () => ({
      title: "Tracks"
    })
  },
  sessionsTrack: {
    screen: SessionsTrack,
    navigationOptions: value => {
      return {
        title: `Session: ${value.navigation.getParam("track", "").name}`
      };
    }
  },
  sessionsTime: {
    screen: SessionsTime,
    navigationOptions: value => {
      return {
        title: `Session: ${value.navigation.getParam("time", "").Name}`
      };
    }
  },
  sessionDetails: {
    screen: SessionDetails,
    navigationOptions: () => ({
      title: "Session Details"
    })
  },
  times: {
    screen: Times,
    navigationOptions: () => ({
      title: "Times"
    })
  }
});
