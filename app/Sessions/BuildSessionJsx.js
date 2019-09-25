import React from "react";
import { Text, View } from "react-native";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import EventCard from "../SharedKernel/EventCard";
import LoadingJsx from "../SharedKernel/LoadingJsx";

export function buildSessionList(list, Type, handleOnPress) {
  if (!list) return LoadingJsx("Sessions Are Loading...");
  let lastName = "";
  return list.map(item => {
    let resultsJSX;
    if (item[Type].Name !== lastName) {
      resultsJSX = <OutSideCardHeader>{item[Type].Name}</OutSideCardHeader>;
      lastName = item[Type].Name;
    }
    resultsJSX = (
      <View key={`Sessions_${item.SessionId}`}>
        {resultsJSX}
        <EventCard onPress={handleOnPress(item)}>
          <Text style={CommonStyles.text}>{item.Name}</Text>
        </EventCard>
      </View>
    );
    return { resultsJSX, itemKey: `Sessions_${item.SessionId}` };
  });
}
