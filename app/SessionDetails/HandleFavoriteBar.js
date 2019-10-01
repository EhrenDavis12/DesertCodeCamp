import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import FavoriteIcon from "./FavoriteBar";
import LoginBar from "./LoginBar";

// const _ = require("underscore");

function HandleFavoriteBar({ navigation, store, sessionId }) {
  const activeUser = store.get("user");
  if (!activeUser || !activeUser.UserId) {
    return <LoginBar navigation={navigation} />;
  } else {
    return <FavoriteIcon activeUser={activeUser} sessionId={sessionId} />;
  }

  // testGetMyInterestedInSessionsByUserId(activeUser.UserId).then(results => {
  //   debugger;
  //   _.find(list, predicate, [context])

  //   var even = _.find(results, session => { return num % 2 == 0; });

  //   return <Icon name="favorite" />
  // });

  //   return {renderJSX};
}

export default withStore(HandleFavoriteBar);
