import React from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { getDecks } from "./reducer";

import DeckSnippet from "./DeckSnippet";

const centerAll = [styles.flexOne, styles.justifyCenter, styles.alignCenter];

class DeckList extends React.Component {
  render() {
    const { decks } = this.props;

    return (
      <View style={[styles.flexOne]}>
        <Text>Decks</Text>
        <View style={centerAll}>
          {decks.map(deck =>
            <DeckSnippet
              key={deck.title}
              {...deck}
              navigation={this.props.navigation}
            />
          )}

          <Button
            accessibilityLabel="Add New Deck"
            onPress={() => this.props.navigation.navigate("NewDeckForm")}
            title="Add New Deck"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const decks = getDecks(state);

  return { decks };
};

export default connect(mapStateToProps)(DeckList);
