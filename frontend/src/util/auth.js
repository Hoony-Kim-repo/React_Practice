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

const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) return redirect("/auth");

  return null;
};

export { checkAuthLoader, getAuthToken, action as logout, tokenLoader };
