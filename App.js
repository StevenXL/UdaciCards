import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import StackNavigation from "./StackNavigation";

import styles from "./styles";

import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.flexOne}>
          <StackNavigation />
        </View>
      </Provider>
    );
  }
}
