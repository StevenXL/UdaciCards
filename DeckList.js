import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

class DeckList extends React.Component {
  render() {
    return (
      <View style={{ borderColor: "red", borderWidth: 3 }}>
        <Text>Decks</Text>
        {decks.map(deck => <DeckSnippet key={deck.title} {...deck} />)}
      </View>
    );
  }
}

export default DeckList;
