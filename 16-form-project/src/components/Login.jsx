import { useState } from "react";

export default function Login() {
  // access to the value entered by user
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPasswod, setEnteredPassword] = useState("");
  // generic state :
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // deal with the data entered by user
  function handleSumbit(event) {
    event.preventDefault(); // prevent the page is reloaded after clicking submit button
    // console.log("submitted");

    // console.log("User email: " + enteredEmail);
    // console.log("User password: " + enteredPasswod);
    console.log(enteredValues);
  }

  // generic event handling function
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value, // dynamically set and target property where the name of property is stored variable or parameter
    }));
  }

  // // handle email change
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // // handle password change
  // function handlPasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
