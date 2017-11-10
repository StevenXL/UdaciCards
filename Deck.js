import React from "react";
import { View, Text } from "react-native";

const Deck = props => {
  console.log(props.navigation.state.params.title);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Deck;
