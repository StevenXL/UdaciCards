import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { cardsToCardsText } from "./utilities";
import { getDeck } from "./reducer";

const Deck = ({ navigation, deck }) => {
  const { title, cards } = deck;
  return (
    <View>
      <Text>
        Title: {title}
      </Text>

      <Text>
        {cardsToCardsText(cards)}
      </Text>

      <Button
        title="Start a Quiz"
        onPress={() => navigation.navigate("Quiz", { deck: title })}
      />

      <Button
        title="Create New Question"
        onPress={() => navigation.navigate("CardForm", { deckId: title })}
      />
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const deckId = navigation.state.params.title;
  const deck = getDeck(state, deckId);

  return { deck };
};

export default connect(mapStateToProps)(Deck);
