import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import EventCard from "../SharedKernel/EventCard";
import { getTimeFieldValues } from "uuid-js";
import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";
import BasicCard from "../SharedKernel/BasicCard";
import LoadingJsx from "../SharedKernel/LoadingJsx";
import MainMenu from "./MainMenu";
import SessionsView from "../Sessions/SessionsView";
import { CleanSessionData } from "../SharedKernel/CleanFilterData";
import {
  testGetTracksByConferenceId,
  testGetTimesByConferenceId,
  testGetSessionsByConferenceId
} from "../API/api";

function LoadApplication({ navigation, store }) {
  const [drawMenuAfterLoad, setDrawMenuAfterLoad] = useState(0);

  handleSelectedTime = () => {
    navigation.navigate("mainMenu");
  };

  updateCountLoad = () => {
    setDrawMenuAfterLoad(drawMenuAfterLoad + 1);
  };

  loadDataWithAsyncStorage = (type, apiCall, cleanData) => {
    AsyncStorage.getItem(`DDC_API_${type}`).then(result => {
      if (!result) {
        debugger;
        apiCall().then(results => {
          debugger;
          results = cleanData(results);
          AsyncStorage.setItem(`DDC_API_${type}`, JSON.stringify(results));
          store.set(type, results);
          updateCountLoad();
        });
      } else {
        store.set(type, JSON.parse(results));
        updateCountLoad();
      }
    });
  };

  loadApiData = (type, apiCall, cleanData) => {
    const data = store.get(type);
    if (!data) {
      apiCall().then(results => {
        results = cleanData(results);
        store.set(type, results);
        updateCountLoad();
      });
    } else {
      updateCountLoad();
    }
  };

  GetUpFrontDataWithClear = () => {
    AsyncStorage.removeItem(`DDC_API_tracks`).then(
      loadApiData(`tracks`, testGetTracksByConferenceId, x => x)
    );
    AsyncStorage.removeItem(`DDC_API_time`).then(
      loadApiData(`time`, testGetTimesByConferenceId, x => x)
    );
    AsyncStorage.removeItem(`DDC_API_sessions`).then(
      loadApiData(`sessions`, testGetSessionsByConferenceId, CleanSessionData)
    );
  };

  GetUpFrontData = () => {
    loadApiData(`tracks`, testGetTracksByConferenceId, x => x);
    loadApiData(`time`, testGetTimesByConferenceId, x => x);
    loadApiData(`sessions`, testGetSessionsByConferenceId, CleanSessionData);
  };

  useEffect(() => {
    if (drawMenuAfterLoad >= 3) handleSelectedTime();
  }, [drawMenuAfterLoad]);

  useEffect(() => {
    GetUpFrontData();
  }, []);

  const loadingJSX = () => LoadingJsx("Loading Application...");

  return (
    <SessionsView
      navigation={navigation}
      sessionJSX={loadingJSX()}
      disableFooter={true}
    />
  );
}

export default withStore(LoadApplication);
