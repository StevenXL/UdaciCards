import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import DeckSnippet from "./DeckSnippet";
const decks = [
  {
    title: "First",
    cards: [
      {
        question: "what is 1 + 2",
        answer: "3",
        stats: { attempts: 0, correct: 0 }
      }
    ]
  },
  {
    title: "Second",
    cards: [
      {
        question: "What is the capital of the U.S.",
        answer: "Washington, D.C.",
        stats: { attempts: 0, correct: 0 }
      }
    ]
  }
];

const centerAll = [styles.flexOne, styles.justifyCenter, styles.alignCenter];

class DeckList extends React.Component {
  render() {
    return (
      <View style={[styles.flexOne]}>
        <Text>Decks</Text>
        <View style={centerAll}>
          {decks.map(deck => <DeckSnippet key={deck.title} {...deck} />)}
        </View>
      </View>
    );
  }
}

export default DeckList;
