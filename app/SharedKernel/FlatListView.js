import React from "react";
import {
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";

import CommonStyles from "./CommonStyles";
import FullScrollView from "./FullScrollView";

function FlatListView(props) {
  return (
    <FullScrollView {...props}>
      <FlatList
        key="flatlist"
        data={props.renderArrayJSX}
        style={CommonStyles.list}
        renderItem={({ item }) => <View>{item.resultsJSX}</View>}
        keyExtractor={item => `Render_${item.itemKey}`}
        initialNumToRender={props.renderArrayJSX.length}
      />
    </FullScrollView>
  );
}

export default FlatListView;
