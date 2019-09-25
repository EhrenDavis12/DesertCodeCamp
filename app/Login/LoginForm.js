import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import { testSearchForEmail } from "../API/api";
import EventCard from "../SharedKernel/EventCard";
import CommonStyles, { ProjectColors } from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

const screenHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: screenHight * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22
  },
  bottomButtons: {
    backgroundColor: ProjectColors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 60,
    margin: 30
  },
  buttonText: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18
  }
});

// getEmail = () => AsyncStorage.getItem("DDC_Email").then(result);

function LoginForm({ navigation, store }) {
  const [email, setEmail] = useState("");

  // useEffect(() => {
  AsyncStorage.getItem("user").then(result => {
    if (result) setEmail(result.Email);
  });
  // }, []);

  //"j.guadagno@gmail.com"
  validEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text);
  };

  handleGetUserSessions = () => {
    // if (validEmail(email))
    testSearchForEmail("j.guadagno@gmail.com").then(result => {
      if (result.length === 1) {
        AsyncStorage.setItem("DDC_Email", "j.guadagno@gmail.com");
        store.set("user", result[0]);
        navigation.navigate("mySessionsTrack", { user: result[0] });
      } else {
        Alert.alert(`Please re-enter your email`);
      }
    });
  };

  return (
    <FullScrollView navigation={navigation}>
      <View style={[CommonStyles.card, styles.card, CommonStyles.shadowBox]}>
        <TextInput
          style={(CommonStyles.text, styles.text)}
          onChangeText={value => setEmail(value)}
          placeholder="yourEmail@gmail.com"
          spellCheck={false}
          value={email}
        />
      </View>
      <TouchableHighlight
        style={[styles.bottomButtons, CommonStyles.shadowBox]}
        underlayColor={ProjectColors.selectColor}
        onPress={() => handleGetUserSessions()}
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableHighlight>
    </FullScrollView>
  );
}

export default withStore(LoginForm);
