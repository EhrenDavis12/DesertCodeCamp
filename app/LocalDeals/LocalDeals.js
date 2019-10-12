import React from "react";
import { Alert, FlatList, Text, View, StyleSheet } from "react-native";

import BasicCard from "../SharedKernel/BasicCard";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";
import OutSideCardHeader from "../SharedKernel/OutSideCardHeader";

function LocalDeals({ navigation }) {
  return (
    <FullScrollView navigation={navigation}>
      <OutSideCardHeader>Company:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>Iced For Life</Text>
      </BasicCard>

      <OutSideCardHeader>App Exclusive Offer:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>
          1 FREE Medium Coffee at Iced For Life!!!
        </Text>
        <Text style={CommonStyles.text}>
          Present this app in store to redeem this offer!
        </Text>
        <Text style={CommonStyles.text}>Other deals available as well!</Text>
      </BasicCard>

      <OutSideCardHeader>Happy Birthday:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>Iced For Life turns 4 years old!</Text>
        <Text style={CommonStyles.text}>Come out to celebrate with us!</Text>
      </BasicCard>

      <OutSideCardHeader>Offer Valid For:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>
          Saturday Only: Oct 12, 2019 9am to 9pm
        </Text>
      </BasicCard>

      <OutSideCardHeader>Location:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>1490 E Williams Field Rd, Ste 103</Text>
        <Text style={CommonStyles.text}>Gilbert, Arizona 85295</Text>
        <Text style={CommonStyles.text}>
          On North West corner of Williams Field and Val Vista
        </Text>
      </BasicCard>

      <OutSideCardHeader>Website:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>http://icedforlife.com/</Text>
      </BasicCard>

      <OutSideCardHeader>Phone Number:</OutSideCardHeader>
      <BasicCard>
        <Text style={CommonStyles.text}>480-786-8858</Text>
      </BasicCard>
    </FullScrollView>
  );
}

export default LocalDeals;
