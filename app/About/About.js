import React from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import BasicCard from "../SharedKernel/BasicCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";

function About({ navigation }) {
  return (
    <FullScrollView navigation={navigation}>
      <OutSideCardHeader>Descriptions:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>
          Code Camps have been taking place all over the country. This is a
          free, one-day event put on by the local Phoenix community to help
          promote software development in general.
        </Text>
        <Text />
        <Text style={CommonStyles.text}>
          There is no right or wrong language, platform, or technology. If a
          topic relates in any way to the code that causes a machine to produce
          a desired result, it's welcome here.
        </Text>
      </BasicCard>

      <OutSideCardHeader>Where:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>
          Chandler - Gilbert Community College, Pecos Campus
        </Text>
        <Text style={CommonStyles.text}>
          2626 E. Pecos Road, Chandler, AZ 85225
        </Text>
      </BasicCard>

      <OutSideCardHeader>When:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>Oct 12, 2019 8am to 6pm</Text>
      </BasicCard>

      <OutSideCardHeader>Organizer Contact Email:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>jguadagno@hotmail.com</Text>
      </BasicCard>

      <OutSideCardHeader>App Developed By:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>Ehren.Davis12@gmail.com</Text>
      </BasicCard>
    </FullScrollView>
  );
}

export default About;
