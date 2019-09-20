import React, { useState, useEffect } from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

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

function MainMenu({ navigation }) {
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
    },
    {
      ID: 3,
      Name: "Login",
      onPress: () => {}
    }
  ];

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

export default MainMenu;
