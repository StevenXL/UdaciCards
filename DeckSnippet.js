import React from "react";
import { Text, TouchableOpacity } from "react-native";

// we need to pas navigation object from teh stack navigator down here;
// and when we do we need to tell it to go to to the correct view with some data
class DeckSnippet extends React.Component {
  render() {
    const { title, cards, navigation } = this.props;
    const numberOfCards = cards.length;

    return (
      <TouchableOpacity onPress={() => navigation.navigate("Deck", { title })}>
        <Text>
          Deck: {title}
        </Text>
        <Text>
          Cards: {numberOfCards} {numberOfCards === 1 ? "card" : "cards"}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DeckSnippet;
