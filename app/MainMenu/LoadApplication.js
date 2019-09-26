import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { withStore } from "../SharedKernel/HOC/Store";

import LoadingJsx from "../SharedKernel/LoadingJsx";
import FlatListView from "../SharedKernel/FlatListView";
import { CleanSessionData } from "../SharedKernel/CleanFilterData";
import {
  testGetTracksByConferenceId,
  testGetTimesByConferenceId,
  testGetSessionsByConferenceId
} from "../API/api";

function LoadApplication({ navigation, store }) {
  const [drawMenuAfterLoad, setDrawMenuAfterLoad] = useState(0);
  const partsToLoad = 4;
  // let loadingJSX = () => LoadingJsx(`Loading Application...`);
  const loadingJSX = () =>
    LoadingJsx(
      `Loading Application... ${(
        (100 / partsToLoad) *
        drawMenuAfterLoad
      ).toFixed(0)}%`
    );

  handleSelectedTime = () => {
    navigation.navigate("mainMenu");
  };

  updateCountLoad = () => {
    setDrawMenuAfterLoad(drawMenuAfterLoad + 1);
  };

  // loadDataWithAsyncStorage = (type, apiCall, cleanData) => {
  //   AsyncStorage.getItem(`DDC_API_${type}`).then(result => {
  //     if (!result) {
  //       debugger;
  //       apiCall().then(results => {
  //         debugger;
  //         results = cleanData(results);
  //         AsyncStorage.setItem(`DDC_API_${type}`, JSON.stringify(results));
  //         store.set(type, results);
  //         updateCountLoad();
  //       });
  //     } else {
  //       store.set(type, JSON.parse(results));
  //       updateCountLoad();
  //     }
  //   });
  // };

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

  loadAsyncData = (type, defaultValue) => {
    AsyncStorage.getItem(type).then(results => {
      results = results ? results : defaultValue;
      debugger;
      store.set(type, results);
      updateCountLoad();
    });
  };

  // GetUpFrontDataWithClear = () => {
  //   AsyncStorage.removeItem(`DDC_API_tracks`).then(
  //     loadApiData(`tracks`, testGetTracksByConferenceId, x => x)
  //   );
  //   AsyncStorage.removeItem(`DDC_API_time`).then(
  //     loadApiData(`time`, testGetTimesByConferenceId, x => x)
  //   );
  //   AsyncStorage.removeItem(`DDC_API_sessions`).then(
  //     loadApiData(`sessions`, testGetSessionsByConferenceId, CleanSessionData)
  //   );
  // };

  GetUpFrontData = () => {
    loadAsyncData("DDC_Email", "");
    loadApiData(`tracks`, testGetTracksByConferenceId, x => x);
    loadApiData(`times`, testGetTimesByConferenceId, x => x);
    loadApiData(`sessions`, testGetSessionsByConferenceId, CleanSessionData);
  };

  useEffect(() => {
    if (drawMenuAfterLoad >= partsToLoad) handleSelectedTime();
  }, [drawMenuAfterLoad]);

  useEffect(() => {
    GetUpFrontData();
  }, []);

  return (
    <FlatListView
      navigation={navigation}
      renderArrayJSX={loadingJSX()}
      disableFooter={true}
    />
  );
}

export default withStore(LoadApplication);
