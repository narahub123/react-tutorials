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
      <Results input={userInput} />
    </>
  );
}

export default App;
