import { redirect } from "react-router-dom";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const action = () => {
  localStorage.removeItem("token");
  return redirect("/");
};

export { getAuthToken, action as logout };
