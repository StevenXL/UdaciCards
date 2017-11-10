import React from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import styles from "./styles";

import DeckList from "./DeckList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.flexOne}>
        <Nav />
      </View>
    );
  }
}

const Nav = StackNavigator({ Home: { screen: DeckList } });
