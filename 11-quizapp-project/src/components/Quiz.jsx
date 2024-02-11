import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
// import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // derived state : computed value
  const activeQuestionIndex = userAnswers.length;

  // quiz is over: computed value
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; // we can not exceed number of questions we have

  // store selected answer in userAnswers array
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // update state based on previous state
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    // [activeQuestionIndex]
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // disply on the screen when quiz is over
  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
    // (
    // <div id="summary">
    //   <img src={quizCompleteImg} alt="Trophy icon" />
    //   <h2>Quiz Completed!</h2>
    // </div>
    // );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
