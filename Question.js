import React from "react";
import styles from "./styles";
import { View, Text, Button } from "react-native";

const Question = ({ question, showAnswer, questionNumber, totalCards }) => {
  return (
    <View style={[styles.flexOne, styles.justifyCenter, styles.alignCenter]}>
      <Text>Question</Text>
      <Text>
        {question}
      </Text>
      <Text>
        {`Question ${questionNumber + 1} of ${totalCards}`}
      </Text>
      <Button
        accessibilityLabel="Show Answer"
        onPress={showAnswer}
        title="Show Answer"
      />
    </View>
  );
};

export default Question;
