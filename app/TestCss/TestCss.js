import React, { useState, useEffect } from "react";
import {
  Alert,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import EventCard from "../SharedKernel/EventCard";
import CommonStyles from "../SharedKernel/CommonStyles";

const fileName = `./test.json`;

function TestCss({ navigation }) {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    let testDB = require(fileName);
    setTestData(testDB);
  }, []);

  return [
    <FlatList
      key="flatlist"
      data={testData}
      style={CommonStyles.list}
      renderItem={({ item }) => (
        <EventCard
          onPress={() => Alert.alert(`Simple Button pressed: ${item.Name}`)}
        >
          <View style={{ backgroundColor: "gray", flexDirection: "row" }}>
            <Text style={{ backgroundColor: "yellow" }}>{item.Name}</Text>
            <Text style={{ backgroundColor: "green", marginLeft: "auto" }}>
              {item.Name}
            </Text>
          </View>
          <Text style={{ backgroundColor: "blue", textAlign: "right" }}>
            {item.Name}
          </Text>
          <Text style={{ backgroundColor: "pink", alignSelf: "flex-end" }}>
            {item.Name}
          </Text>
        </EventCard>
      )}
      keyExtractor={item => `test_${item.TrackId}`}
    />
  ];
}

export default TestCss;
