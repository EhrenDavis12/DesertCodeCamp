import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import CommonStyles, { ProjectColors } from "./CommonStyles";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    backgroundColor: ProjectColors.MenuBgColor,
    borderTopWidth: 4
  },
  bottomButtons: {
    backgroundColor: ProjectColors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 60,
    margin: 5
  },
  footerText: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18
  }
});

export default function Footer({ navigation }) {
  handleSelectedMainMenu = () => {
    navigation.navigate("mainMenu");
  };

  return (
    <View style={styles.footer}>
      <TouchableHighlight
        style={[styles.bottomButtons, CommonStyles.shadowBox]}
        underlayColor={ProjectColors.selectColor}
        onPress={() => handleSelectedMainMenu()}
      >
        <Text style={styles.footerText}>Main Menu</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.bottomButtons, CommonStyles.shadowBox]}
        underlayColor={ProjectColors.selectColor}
      >
        <Text style={styles.footerText}>My Sessions</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.bottomButtons, CommonStyles.shadowBox]}
        underlayColor={ProjectColors.selectColor}
      >
        <Text style={styles.footerText}>My Schedule</Text>
      </TouchableHighlight>
    </View>
  );
}
