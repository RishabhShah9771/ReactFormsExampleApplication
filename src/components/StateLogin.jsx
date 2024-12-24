import { useState } from "react";

const Login = () => {
  const [enteredValues, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDiEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInavlid = didEdit.email && !enteredValues.email.includes("@");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValue((preValues) => ({
      ...preValues,
      [identifier]: value,
    }));
    setDiEdit((preEdit) => ({
      ...preEdit,
      [identifier]: false,
    }));
  };

  const handleEmailBlur = (identifier) => {
    setDiEdit((preEdit) => ({
      ...preEdit,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleEmailBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInavlid && <p>Please enter a Valid email address </p>}
          </div>
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
};
export default Login;
