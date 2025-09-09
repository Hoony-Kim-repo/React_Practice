import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const onSelectAnswer = useCallback(function onSelectAnswer(selectedAnswer) {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }, []);

  const onSkipQuestion = useCallback(
    () => onSelectAnswer(null),
    [onSelectAnswer]
  );

  if (isQuizCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          onSelectAnswer={onSelectAnswer}
          onSkipQuestion={onSkipQuestion}
        />
      </div>
    </div>
  );
}
