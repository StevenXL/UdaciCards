import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { connect } from "react-redux";
import R from "ramda";

import { addNewCard } from "./actions";

class CardForm extends React.Component {
  state = { question: "", answer: "" };

  updateValue = field => text => {
    this.setState({ [field]: text });
  };

  disabled = () => {
    return this.state.question === "" || this.state.answer === "";
  };

  resetState = () => this.setState({ question: "", answer: "" });

  navigateToDeck = this.props.navigation.goBack;

  handleOnPress = () => {
    const { deckId } = this.props;
    const { question, answer } = this.state;

    this.props.addNewCard({ deckId, question, answer });
    this.resetState();
    this.navigateToDeck();
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>Question:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={this.updateValue("question")}
            value={question}
          />
        </View>

        <View>
          <Text>Answer:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={this.updateValue("answer")}
            value={answer}
          />
        </View>

        <Button
          accessibilityLabel="Add Card to Deck"
          disabled={this.disabled()}
          onPress={this.handleOnPress}
          title="Add Card"
        />
      </View>
    );
  }
}

// CONNECT

const mapStateToProps = (state, ownProps) => {
  const path = ["navigation", "state", "params", "deckId"];
  const deckId = R.path(path, ownProps);

  return { deckId };
};

const mapDispatchToProps = dispatch => {
  return { addNewCard: args => dispatch(addNewCard(args)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
