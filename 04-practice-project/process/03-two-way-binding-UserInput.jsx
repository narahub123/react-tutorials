import { useState } from "react";
import "./UserInput.css";

export default function UserInput() {
  // two ways to use useState() in this case
  // 1. managing four diffent state for four different input field
  // 2. having one state object that merges all different input values into one
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, // initial state
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // a function that should be triggered whenever we change the value in these inut fields
  // so we can update the state
  // two ways to create the function
  // 1. add four functions, one for every input
  // 2. one generic function that can be connected to all inputs
  // newValue : was entered for a given input
  // inputIndentifier : what for ?
  function handleChange(inputIdentifier, newValue) {
    // update the state based on the previous state value
    // -> when this handle change function executes, only one of four properties will be updated
    // -> the other properties and their values shouldn't be lost
    setUserInput((prevUserInput) => {
      // for updating the state where we get the previous use input and
      // where we then return updated state object
      return {
        // spread the old user input state object into the new object
        ...prevUserInput,
        [inputIdentifier]: newValue,
        // overwrite one single property of that object
        // the property should be identified with help of input identifier parameter
        // inputIdentifier : get a string as value
        // [] : js syntax to dynamically set a property depending on which value is stored in input identifier
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Inverstment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Inverstment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
