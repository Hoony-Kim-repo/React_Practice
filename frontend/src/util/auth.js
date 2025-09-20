import { redirect } from "react-router-dom";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const action = () => {
  localStorage.removeItem("token");
  return redirect("/");
};

const tokenLoader = () => {
  return getAuthToken();
};

export { getAuthToken, action as logout, tokenLoader };
