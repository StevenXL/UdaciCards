import React from "react";
import styles from "./styles";
import { View, Text, Button, TextInput } from "react-native";
import { connect } from "react-redux";

import { addNewDeck } from "./actions";

class NewDeckForm extends React.Component {
  state = { deckId: "" };

  disabled = () => this.state.deckId === "";

  updateDeckId = text => this.setState({ deckId: text });

  addNewDeck = () => {
    const { deckId } = this.state;

    this.props.addNewDeck(deckId);

    return this.props.navigation.navigate("Deck", { title: deckId });
  };

  render() {
    const { deckId } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>Deck Title:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={this.updateDeckId}
            value={deckId}
          />
        </View>

        <Button
          accessibilityLabel="Add New Deck"
          disabled={this.disabled()}
          onPress={this.addNewDeck}
          title="Add New Deck"
        />
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { addNewDeck };

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckForm);
