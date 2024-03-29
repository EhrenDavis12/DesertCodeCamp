import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import BasicCard from "../SharedKernel/BasicCard";
import CommonStyles, { ProjectColors } from "../SharedKernel/CommonStyles";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import FullScrollView from "../SharedKernel/FullScrollView";
import HandleFavoriteBar from "./HandleFavoriteBar";
import { CleanStringHTML } from "../SharedKernel/CleanFilterData";

function SessionDetails({ navigation }) {
  const details = navigation.getParam("session", {});

  // get the session details,
  // including name, abstract, presenter(s), room and time.
  let { Name, Abstract, MainPresenter, Room, Time, SessionId, Track } = details;
  Name = CleanStringHTML(Name);
  Abstract = CleanStringHTML(Abstract);

  // return <Text style={CommonStyles.text}>{Name}</Text>;
  return (
    <FullScrollView navigation={navigation}>
      <HandleFavoriteBar navigation={navigation} sessionId={SessionId} />

      <OutSideCardHeader>Session:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{Name}</Text>
      </BasicCard>

      <OutSideCardHeader>Details: </OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{`Room: ${Room.Name}`}</Text>
        <Text style={CommonStyles.text}>{`Time: ${Time.Name}`}</Text>
        <Text style={CommonStyles.text}>{`Track: ${Track.Name}`}</Text>
      </BasicCard>

      <OutSideCardHeader>Summary: </OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>{Abstract}</Text>
      </BasicCard>

      <OutSideCardHeader>Presenter: </OutSideCardHeader>
      <BasicCard>
        <Text
          style={CommonStyles.text}
        >{`${MainPresenter.FirstName} ${MainPresenter.LastName}`}</Text>
      </BasicCard>
    </FullScrollView>
  );
}

export default SessionDetails;
