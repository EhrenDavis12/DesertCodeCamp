import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import EventCard from "../SharedKernel/EventCard";
import Icon from "../Icons/Icons";

// const _ = require("underscore");

{
  /* <IconTest name="favorite" />
<IconTest name="favoriteBorder" height="20" width="20"  />
<IconTest name="SortArrows" height="20" width="20" /> */
}

function FavoriteBar({ activeUser }) {
  handleFavoriteSession = () => () => {
    // if (validEmail(email))
    testSearchForEmail(testEmail2).then(result => {
      if (result.length === 1) {
        // AsyncStorage.setItem("DDC_Email", testEmail);
        store.set("user", result[0]);
        doNotGoBack
          ? navigation.navigate("mySessionsTrack", { user: result[0] })
          : navigation.goBack(null);
      } else {
        Alert.alert(`Please re-enter your email`);
      }
    });
  };
  // testGetMyInterestedInSessionsByUserId(activeUser.UserId).then(results => {
  //   debugger;
  //   _.find(list, predicate, [context])

  //   var even = _.find(results, session => { return num % 2 == 0; });

  //   return <Icon name="favorite" />
  // });

  return (
    <EventCard onPress={() => handleFavoriteSession()}>
      <View style={{ flexDirection: "row" }}>
        <Text style={CommonStyles.text}>Favor this session!</Text>
        <Icon style={{ marginLeft: "auto" }} name="favoriteBorder" />
      </View>
    </EventCard>
  );
}

export default withStore(FavoriteBar);
