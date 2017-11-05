import React from "react";
import { StyleSheet, Text, View } from "react-native";

class DeckSnippet extends React.Component {
  render() {
    const { title, cards } = this.props;
    const numberOfCards = cards.length;

    return (
      <View>
        <Text>
          {title}
        </Text>
        <Text>
          {numberOfCards} {numberOfCards === 1 ? "card" : "cards"}
        </Text>
      </View>
    );
  }
}

export default DeckSnippet;
