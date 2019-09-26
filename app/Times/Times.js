import React, { useState, useEffect } from "react";
import { withStore } from "../SharedKernel/HOC/Store";

import LoadingJsx from "../SharedKernel/LoadingJsx";
import FlatListView from "../SharedKernel/FlatListView";
import { buildBasicList } from "../Sessions/BuildSessionJsx";
import { sort } from "../SharedKernel/CleanFilterData";

function Times({ navigation, store }) {
  const [renderArrayJSX, setRenderArrayJSX] = useState(
    LoadingJsx(`Time slots are loading...`)
  );

  setTimeSlots = times => {
    setRenderArrayJSX(
      buildBasicList(sort(times, "StartTime"), "Time", handleSelected)
    );
  };

  useEffect(() => {
    setTimeSlots(store.get(`times`));
  }, []);

  handleSelected = time => () => {
    navigation.navigate("sessionsTime", { time });
  };

  return (
    <FlatListView navigation={navigation} renderArrayJSX={renderArrayJSX} />
  );
}

export default withStore(Times);
