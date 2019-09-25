import React from "react";
import {
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";

import CommonStyles from "../SharedKernel/CommonStyles";
import FullScrollView from "../SharedKernel/FullScrollView";

function SessionsView(props) {
  return (
    <FullScrollView {...props}>
      <FlatList
        key="flatlist"
        data={props.sessionJSX}
        style={CommonStyles.list}
        renderItem={({ item }) => <View>{item.resultsJSX}</View>}
        keyExtractor={item => `Render_${item.itemKey}`}
      />
    </FullScrollView>
  );
}

export default SessionsView;
