// what currently active question is
// change it to different question whenever user answer the question : useState
// store answers of user
import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // currently active question from question array
  const [userAnswers, setUserAnswers] = useState([]); // register user's answer

  return <p>Currently active Question</p>;
}
