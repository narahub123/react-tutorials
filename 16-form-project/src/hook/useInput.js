import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  // access to the value entered by user
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  // track to props had been edited : focus or blur
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  // generic event handling function
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
