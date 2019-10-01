import React from "react";
import { Text, View } from "react-native";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import EventCard from "../SharedKernel/EventCard";
import LoadingJsx from "../SharedKernel/LoadingJsx";
import { CleanStringHTML } from "../SharedKernel/CleanFilterData";

export function buildSessionList(list, Type, handleOnPress) {
  if (!list || list.length < 1) return LoadingJsx("Sessions are Loading...");
  let lastName = "";
  return list.map(item => {
    let resultsJSX;
    const itemName = CleanStringHTML(item.Name);
    if (item[Type].Name !== lastName) {
      resultsJSX = <OutSideCardHeader>{item[Type].Name}</OutSideCardHeader>;
      lastName = item[Type].Name;
    }
    resultsJSX = (
      <View key={`Sessions_${item.SessionId}`}>
        {resultsJSX}
        <EventCard onPress={handleOnPress(item)}>
          <Text style={CommonStyles.text}>{itemName}</Text>
        </EventCard>
      </View>
    );
    return { resultsJSX, itemKey: `Sessions_${item.SessionId}` };
  });
}

export function buildBasicList(list, Type, handleOnPress) {
  if (!list || list.length < 1) return LoadingJsx(`${Type}s are Loading...`);
  return list.map(item => {
    let id = item[`${Type}Id`];
    let resultsJSX = (
      <View key={`${Type}_${id}`}>
        <EventCard onPress={handleOnPress(item)}>
          <Text style={CommonStyles.text}>{item.Name}</Text>
        </EventCard>
      </View>
    );
    return { resultsJSX, itemKey: `${Type}s_${id}` };
  });
}
