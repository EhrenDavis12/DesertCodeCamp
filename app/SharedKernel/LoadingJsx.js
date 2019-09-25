import React from "react";
import { Text, View } from "react-native";

import CommonStyles from "./CommonStyles";
import BasicCard from "../SharedKernel/BasicCard";

LoadingJsx = message => {
  let resultsJSX = (
    <View key={`Loading`}>
      <BasicCard>
        <Text style={CommonStyles.text}>{message}</Text>
      </BasicCard>
    </View>
  );
  return [{ resultsJSX, itemKey: `Loading` }];
};

export default LoadingJsx;
