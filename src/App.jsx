import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ChallengesPage from "./pages/Challenges.jsx";
import WelcomePage from "./pages/Welcome.jsx";

const router = createBrowserRouter([
  { path: "/", Component: WelcomePage },
  { path: "/challenges", Component: ChallengesPage },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
