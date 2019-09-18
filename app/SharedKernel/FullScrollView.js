import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import CommonStyles from "./CommonStyles";
import Footer from "../SharedKernel/Footer";

const styles = StyleSheet.create({
  footerSpace: {
    marginBottom: 80
  }
});

export default function FullScrollView(props) {
  return (
    <SafeAreaView style={CommonStyles.mainContainer}>
      <ScrollView style={styles.footerSpace}>{props.children}</ScrollView>
      <Footer navigation={props.navigation} />
    </SafeAreaView>
  );
}
