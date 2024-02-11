import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
// import QuestionTimer from "./QuestionTimer.jsx";
// import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  //   const shuffleAnswers = useRef();
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  // derived state : computed value
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  // quiz is over: computed value
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; // we can not exceed number of questions we have

  // store selected answer in userAnswers array
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // change the color of selected answer
      setAnswerState("answered");
      // update state based on previous state
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      // after a second, change answer state to right answer or wrong answer
      // use the state for styling the answer
      setTimeout(() => {
        // check if the selected answer is right or wrong
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        // only start above timer is expired
        setTimeout(() => {
          setAnswerState(""); // answer get reset
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // disply on the screen when quiz is over
  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers.length - 1}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
