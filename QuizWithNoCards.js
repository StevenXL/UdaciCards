import React from "react";
import styles from "./styles";
import { View, Text, Button } from "react-native";

import { centerAll } from "./helpers";

const QuizWithNoCards = ({ navigation, deckId }) => {
  return (
    <View style={centerAll}>
      <Text>This quiz has no cards</Text>

      <Button
        accessibilityLabel="Add a Card"
        onPress={() => navigation.navigate("CardForm", { deckId })}
        title="Add a Card"
      />
    </View>
  );
};

export default QuizWithNoCards;
