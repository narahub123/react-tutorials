import { useState } from "react";
import Header from "../src/components/Header/Header.jsx";
import UserInput from "../src/components/UserInput/UserInput.jsx";
import Results from "../src/components/Results.jsx";

function App() {
  // lifting state up
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // add a new constant or variable where we derive the information
  // whether the input is valid or not based on the user input state
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // force a conversion of string value to a number value
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
