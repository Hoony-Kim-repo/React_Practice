import { useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const onSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quizCompleteImage" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
