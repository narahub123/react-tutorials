// what currently active question is
// change it to different question whenever user answer the question : useState
// store answers of user
import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); redundent!!
  const [userAnswers, setUserAnswers] = useState([]);

  // derived state : computed value
  const activeQuestionIndex = userAnswers.length;

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
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            {/* passing an argument */}
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
