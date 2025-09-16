import { useActionState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/redux/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const formAction = (_prevState, formData) => {
    const userData = Object.fromEntries(formData.entries());

    if (userData.email === "admin@admin.com" && userData.password === "admin")
      dispatch(authActions.login());
  };

  const [_formState, formActionFromHook, pending] = useActionState(formAction, {
    email: "",
    password: "",
  });

  return (
    <main className={classes.auth}>
      <section>
        <form action={formActionFromHook}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>{pending ? "Logging in..." : "Login"}</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
