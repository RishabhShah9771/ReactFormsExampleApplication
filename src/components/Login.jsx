import { useRef, useState } from "react";

const Login = () => {
  const [formIsValid, setFormIsValid] = useState();
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid = !enteredEmail.includes("@");
    const passwordIsInvalid = enteredPassword.trim().length === 0;

    if (!emailIsInvalid && !passwordIsInvalid && enteredPassword.length > 6) {
      setFormIsValid(true);
      return;
    }
    setFormIsValid(false);
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {formIsValid && <p>Please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className="control-error">
            {formIsValid && <p>Please enter valid password</p>}
          </div>
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
