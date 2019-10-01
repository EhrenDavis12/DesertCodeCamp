import React from "react";
import { StackNavigator } from "react-navigation";
import { createStore } from "./app/SharedKernel/HOC/Store";

import Tracks from "./app/Tracks/Tracks";
import TestCss from "./app/TestCss/TestCss";
import SessionsTrack from "./app/Sessions/SessionsTrack";
import SessionsTime from "./app/Sessions/SessionsTime";
import MySessionsTrack from "./app/Sessions/MySessionsTrack";
import SessionDetails from "./app/SessionDetails/SessionDetails";
import MainMenu from "./app/MainMenu/MainMenu";
import LoadApplication from "./app/MainMenu/LoadApplication";
import Times from "./app/Times/Times";
import LoginForm from "./app/Login/LoginForm";
import About from "./app/About/About";

// export default StackNavigator({
const stackNavigator = StackNavigator({
  loadApplication: {
    screen: LoadApplication,
    navigationOptions: () => ({
      title: "Main Menu"
    })
  },
  testCss: {
    screen: TestCss,
    navigationOptions: () => ({
      title: "Test Css"
    })
  },
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
        title: `Session: ${value.navigation.getParam("track", "").Name}`
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
  },
  loginForm: {
    screen: LoginForm,
    navigationOptions: () => ({
      title: "Login Form"
    })
  },
  mySessionsTrack: {
    screen: MySessionsTrack, //SessionsTrack
    navigationOptions: value => {
      const user = value.navigation.getParam("user", "");
      name = user ? `${user.FirstName} ${user.LastName}` : "";
      return {
        title: name
      };
    }
  },
  about: {
    screen: About,
    navigationOptions: () => ({
      title: "About"
    })
  }
});

export default createStore(stackNavigator);
