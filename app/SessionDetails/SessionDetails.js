import React from "react";
import { Text } from "react-native";

import EventCard from "../SharedKernel/EventCard";
import CommonStyles, { ProjectColors } from "../SharedKernel/CommonStyles";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";
import FullScrollView from "../SharedKernel/FullScrollView";

const _ = require("underscore");

function SessionDetails({ navigation }) {
  const details = navigation.getParam("session", {});

  // get the session details,
  // including name, abstract, presenter(s), room and time.
  const { Name, Abstract, MainPresenter, Room, Time } = details;

  // return <Text style={CommonStyles.text}>{Name}</Text>;
  return (
    <FullScrollView navigation={navigation}>
      <OutSideCardHeader>Session:</OutSideCardHeader>
      <EventCard onPress={() => {}}>
        <Text style={CommonStyles.text}>{Name}</Text>
      </EventCard>

      <OutSideCardHeader>Details: </OutSideCardHeader>
      <EventCard onPress={() => {}}>
        <Text style={CommonStyles.text}>{`Room: ${Room.Name}`}</Text>
        <Text style={CommonStyles.text}>{`Time: ${Time.Name}`}</Text>
      </EventCard>

      <OutSideCardHeader>Summary: </OutSideCardHeader>
      <EventCard onPress={() => {}}>
        <Text style={CommonStyles.text}>{Abstract}</Text>
      </EventCard>

      <OutSideCardHeader>Presenter (tab to contact): </OutSideCardHeader>
      <EventCard onPress={() => {}}>
        <Text
          style={CommonStyles.text}
        >{`${MainPresenter.FirstName} ${MainPresenter.LastName}`}</Text>
      </EventCard>
    </FullScrollView>
  );
}

export default SessionDetails;
