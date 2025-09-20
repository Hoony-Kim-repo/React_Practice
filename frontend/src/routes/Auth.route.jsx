import AuthenticationPage, {
  authenticationAction,
} from "../pages/authentication/Authentication";

const authRoute = {
  path: "auth",
  Component: AuthenticationPage,
  action: authenticationAction,
};

export default authRoute;
