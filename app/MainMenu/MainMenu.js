import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";
// import GetUpFrontData from "../DB_files/GetUpFrontData";

const styles = StyleSheet.create({
  card: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 40,
    margin: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

function MainMenu({ navigation, store }) {
  const menuItems = [
    {
      ID: 1,
      Name: "Tracks",
      onPress: () => navigation.navigate("tracks")
    },
    {
      ID: 2,
      Name: "Times",
      onPress: () => navigation.navigate("times")
    }
  ];
  const user = store.get("user");
  if (!user) {
    menuItems.push({
      ID: 3,
      Name: "Login",
      onPress: () => navigation.navigate("loginForm", { doNotGoBack: true })
    });
  } else {
    menuItems.push({
      ID: 4,
      Name: "My Session",
      onPress: () => navigation.navigate("mySessionsTrack", { user })
    });
    menuItems.push({
      ID: 5,
      Name: "Logout",
      onPress: () => store.set("user", null) //navigation.navigate("logout")
    });
  }
  menuItems.push({
    ID: 6,
    Name: "About DCC",
    onPress: () => navigation.navigate("about")
  });
  // menuItems.push({
  //   ID: 7,
  //   Name: "Test CSS",
  //   onPress: () => navigation.navigate("testCss")
  // });

  return (
    <FullScrollView navigation={navigation}>
      <FlatList
        key="menuList"
        data={menuItems}
        style={CommonStyles.list}
        renderItem={({ item }) => (
          <EventCard style={styles.card} onPress={item.onPress}>
            <Text style={(CommonStyles.text, styles.text)}>{item.Name}</Text>
          </EventCard>
        )}
        keyExtractor={item => `menu_${item.ID}`}
      />
    </FullScrollView>
  );
}

export default withStore(MainMenu);
