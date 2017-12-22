import R from "ramda";
import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { centerAll, calculatePercent } from "./helpers";

const QuizEnd = ({ correct, attempts, restartQuiz, backToDeck }) => {
  return (
    <View style={centerAll}>
      <Text>
        Correct: {correct}{" "}
      </Text>
      <Text>
        Attempted: {attempts}
      </Text>
      <Text>
        Score: {`${calculatePercent(correct, attempts)}%`}{" "}
      </Text>
      <Button
        accessibilityLabel="Restart Quiz"
        onPress={restartQuiz}
        title="Restart Quiz"
      />

      <Button
        accessibilityLabel="Back to Deck"
        onPress={backToDeck}
        title="Back to Deck"
      />
    </View>
  );
};

export default QuizEnd;
