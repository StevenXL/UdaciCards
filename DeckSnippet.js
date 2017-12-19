import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { cardsToCardsText } from "./utilities";

class DeckSnippet extends React.Component {
  render() {
    const { title, cards, navigation } = this.props;
    const numberOfCards = cards.length;

    return (
      <TouchableOpacity onPress={() => navigation.navigate("Deck", { title })}>
        <Text>
          Deck Name: {title}
        </Text>
        <Text>
          Cards in Deck: {cardsToCardsText(cards)}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DeckSnippet;
