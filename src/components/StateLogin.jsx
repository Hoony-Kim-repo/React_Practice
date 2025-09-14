import { useState } from "react";

export default function StateLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !values.email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);
  };

  const handleValuesChange = (identifier, event) => {
    setValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));

    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleValuesChange("email", event)}
            value={values.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleValuesChange("password", event)}
            value={values.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
