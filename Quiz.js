import R from "ramda";
import React from "react";
import styles from "./styles";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { getCardsForDeck } from "./reducer";

import Card from "./Card";
import QuizEnd from "./QuizEnd";
import QuizWithNoCards from "./QuizWithNoCards";

const initialState = {
  currentCard: 0,
  currentSide: "question",
  attempts: 0,
  correct: 0
};

class Quiz extends React.Component {
  state = initialState;

  currentCard = () => {
    const { currentCard } = this.state;
    return this.props.cards[currentCard];
  };

  showAnswer = () => {
    this.setState({ currentSide: "answer" });
  };

  markCardCorrect = () => {
    const updater = (previousState, props) => {
      const attempts = previousState.attempts + 1;
      const correct = previousState.correct + 1;

      return R.merge(previousState, { attempts, correct });
    };

    const callback = this.nextQuestion;

    this.setState(updater, callback);
  };

  markCardIncorrect = () => {
    const updater = (previousState, props) => {
      const attempts = previousState.attempts + 1;
      return R.merge(previousState, { attempts });
    };

    const callback = this.nextQuestion;

    this.setState(updater, callback);
  };

  nextQuestion = () => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard + 1,
      currentSide: "question"
    }));
  };

  restartQuiz = () => {
    this.setState(initialState);
  };

  backToDeck = () => {
    const { navigation, deckId } = this.props;

    return navigation.navigate("Deck", { title: deckId });
  };

  render() {
    const card = this.currentCard();
    const { currentCard, currentSide, correct, attempts } = this.state;
    const numCardsInDeck = this.props.cards.length;
    const hasCards = numCardsInDeck > 0;

    if (!hasCards) {
      return (
        <QuizWithNoCards
          navigation={this.props.navigation}
          deckId={this.props.deckId}
        />
      );
    }

    return card
      ? <Card
          {...card}
          isQuestion={currentSide === "question"}
          showAnswer={this.showAnswer}
          nextQuestion={this.nextQuestion}
          markCardCorrect={this.markCardCorrect}
          markCardIncorrect={this.markCardIncorrect}
          questionNumber={currentCard}
          totalCards={numCardsInDeck}
        />
      : <QuizEnd
          correct={correct}
          attempts={attempts}
          restartQuiz={this.restartQuiz}
          backToDeck={this.backToDeck}
        />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const path = ["navigation", "state", "params", "deckId"];
  const deckId = R.path(path, ownProps);

  const cards = getCardsForDeck(state, deckId);

  return { cards, deckId };
};

export default connect(mapStateToProps)(Quiz);
