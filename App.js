// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

import React from "react";
import { StackNavigator } from "react-navigation";

import Tracks from "./app/Tracks/Tracks";
import Sessions from "./app/Sessions/Sessions";

export default StackNavigator({
  tracks: {
    screen: Tracks,
    navigationOptions: () => ({
      title: "Tracks"
    })
  },
  sessions: {
    screen: Sessions,
    navigationOptions: () => ({
      title: "Sessions"
    })
  }
});
