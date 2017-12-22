import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import StackNavigation from "./StackNavigation";

import styles from "./styles";
import store from "./store";
import { setLocalNotification } from "./helpers";

export default class App extends React.Component {
  componentDidMount() {
    return setLocalNotification();
  }

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
