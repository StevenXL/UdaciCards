import React from "react";
import { StyleSheet, Text, View } from "react-native";

class DeckSnippet extends React.Component {
  render() {
    const { title, cards } = this.props;
    const numberOfCards = cards.length;

    return (
      <View>
        <Text>
          Deck: {title}
        </Text>
        <Text>
          Cards: {numberOfCards} {numberOfCards === 1 ? "card" : "cards"}
        </Text>
      </View>
    );
  }
}

export default DeckSnippet;
