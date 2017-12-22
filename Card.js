import React from "react";

import Question from "./Question";
import Answer from "./Answer";

const Card = ({
  answer,
  isQuestion,
  question,
  showAnswer,
  markCardCorrect,
  markCardIncorrect,
  questionNumber,
  totalCards
}) => {
  return isQuestion
    ? <Question
        question={question}
        showAnswer={showAnswer}
        questionNumber={questionNumber}
        totalCards={totalCards}
      />
    : <Answer
        answer={answer}
        markCardCorrect={markCardCorrect}
        markCardIncorrect={markCardIncorrect}
      />;
};

export default Card;
