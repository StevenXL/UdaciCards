import React from "react";
import styles from "./styles";
import { View, Text, Button } from "react-native";

const Answer = props => {
  const { answer, markCardCorrect, markCardIncorrect } = props;

  return (
    <View style={[styles.flexOne, styles.justifyCenter, styles.alignCenter]}>
      <Text>Answer</Text>
      <Text>
        {answer}
      </Text>

      <Button
        accessibilityLabel="Mark Correct"
        onPress={markCardCorrect}
        title="Mark Correct"
      />

      <Button
        accessibilityLabel="Mark Incorrect"
        onPress={markCardIncorrect}
        title="Mark Incorrect"
      />
    </View>
  );
};

export default Answer;
