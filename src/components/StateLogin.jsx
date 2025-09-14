import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: email,
    hasError: emailHasError,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: password,
    hasError: passwordHasError,
    handleValueChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) return;

    console.log(email, password);
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={password}
          error={passwordHasError && "Please enter a valid password!"}
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
