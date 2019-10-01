import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import BasicCard from "../SharedKernel/BasicCard";
import CommonStyles, { ProjectColors } from "../SharedKernel/CommonStyles";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import FullScrollView from "../SharedKernel/FullScrollView";
import HandleFavoriteBar from "./HandleFavoriteBar";

function SessionDetails({ navigation }) {
  const details = navigation.getParam("session", {});

  // get the session details,
  // including name, abstract, presenter(s), room and time.
  const { Name, Abstract, MainPresenter, Room, Time } = details;

  // return <Text style={CommonStyles.text}>{Name}</Text>;
  return (
    <FullScrollView navigation={navigation}>
      <HandleFavoriteBar navigation={navigation} />

      <OutSideCardHeader>Session:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{Name}</Text>
      </BasicCard>

      <OutSideCardHeader>Details: </OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{`Room: ${Room.Name}`}</Text>
        <Text style={CommonStyles.text}>{`Time: ${Time.Name}`}</Text>
      </BasicCard>

      <OutSideCardHeader>Summary: </OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{Abstract}</Text>
      </BasicCard>

      <OutSideCardHeader>Presenter (tab to contact): </OutSideCardHeader>
      <BasicCard>
        <Text
          style={CommonStyles.text}
        >{`${MainPresenter.FirstName} ${MainPresenter.LastName}`}</Text>
      </BasicCard>
    </FullScrollView>
  );
}

export default SessionDetails;
