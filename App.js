import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import DeckList from "./DeckList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});

const Nav = StackNavigator({ Home: { screen: DeckList } });
