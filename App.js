import React from "react";
// import { StackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createStore } from "./app/SharedKernel/HOC/Store";

import Tracks from "./app/Tracks/Tracks";
import TestCss from "./app/TestCss/TestCss";
import SessionsTrack from "./app/Sessions/SessionsTrack";
import SessionsTime from "./app/Sessions/SessionsTime";
import MySessionsTrack from "./app/Sessions/MySessionsTrack";
import SessionDetails from "./app/SessionDetails/SessionDetails";
import MainMenu from "./app/MainMenu/MainMenu";
import ReloadYourApp from "./app/MainMenu/ReloadYourApp";
import LoadApplication from "./app/MainMenu/LoadApplication";
import Times from "./app/Times/Times";
import LoginForm from "./app/Login/LoginForm";
import About from "./app/About/About";
import LocalDeals from "./app/LocalDeals/LocalDeals";

const stackNavigator = createStackNavigator({
  loadApplication: {
    screen: LoadApplication,
    navigationOptions: () => ({
      title: "Loading Application"
    })
  },
  reloadYourApp: {
    screen: ReloadYourApp,
    navigationOptions: () => ({
      title: "Connection Failed"
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
  },
  localDeals: {
    screen: LocalDeals,
    navigationOptions: () => ({
      title: "A Sweet Local Deal"
    })
  }
});

const AppContainer = createAppContainer(stackNavigator);
export default createStore(AppContainer);
// export default createAppContainer(createStore(stackNavigator));
