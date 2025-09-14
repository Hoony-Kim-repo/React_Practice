import { useState } from "react";
import Input from "./Input";

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
  const passwordIsInvalid =
    didEdit.password && values.password.trim().length < 6;

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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleValuesChange("email", event)}
          value={values.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleValuesChange("password", event)}
          value={values.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
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
