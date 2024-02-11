import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // derived state : computed value
  const activeQuestionIndex = userAnswers.length;

  // shuffle
  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5); // shuffling
  // store selected answer in userAnswers array
  function handleSelectAnswer(selectedAnswer) {
    // update state based on previous state
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffleAnswers.map((answer) => (
          <li key={answer} className="answer">
            {/* passing an argument */}
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
