import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import LoadingJsx from "../SharedKernel/LoadingJsx";
import FlatListView from "../SharedKernel/FlatListView";
import { buildBasicList } from "../Sessions/BuildSessionJsx";
import { sort } from "../SharedKernel/CleanFilterData";

function Tracks({ navigation, store }) {
  // const tracksJSX = buildBasicList(
  //   sortTracks(store.get(`tracks`)),
  //   "Track",
  //   handleSelected
  // );

  const [renderArrayJSX, setRenderArrayJSX] = useState(
    LoadingJsx(`Tracks are loading...`)
  );

  setTracks = tracks => {
    setRenderArrayJSX(
      buildBasicList(sort(tracks, "Name"), "Track", handleSelected)
    );
  };

  useEffect(() => {
    setTracks(store.get(`tracks`));
  }, []);

  handleSelected = track => () => {
    navigation.navigate("sessionsTrack", { track });
  };

  // event={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}
  return (
    <FlatListView navigation={navigation} renderArrayJSX={renderArrayJSX} />
  );
}

export default withStore(Tracks);
