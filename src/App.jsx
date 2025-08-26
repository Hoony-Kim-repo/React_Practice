import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
  };

  const isInputValid = userInput.duration > 0;

  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChange={handleChange} />

      {isInputValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
