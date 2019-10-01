import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import { testSearchForEmail } from "../API/api";

withUserSessionsHOC = ({ WrappedComponent, store }) => {
  const mySessions = {};

  //   handleGetUserSessions = () => {
  //     // if (validEmail(email))
  //     testSearchForEmail(testEmail2).then(result => {
  //       if (result.length === 1) {
  //         // AsyncStorage.setItem("DDC_Email", testEmail);
  //         store.set("user", result[0]);
  //         doNotGoBack
  //           ? navigation.navigate("mySessionsTrack", { user: result[0] })
  //           : navigation.goBack(null);
  //       } else {
  //         Alert.alert(`Please re-enter your email`);
  //       }
  //     });
  //   };

  return <WrappedComponent mySessions={mySessions} {...this.props} />;
};

export default withStore(withUserSessionsHOC);

// Interested
// https://api.myconferenceevents.com/session/UpdateInterest?sessionId=1723&userId=28094&interested=false
