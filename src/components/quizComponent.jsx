import React, { useState } from "react";
import questions from "./questions";
import Result from "./Result";

export default function QuestionBox() {
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const updateScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const playAgain = () => {
    setScore(0);
    setHighlighted(false);
    setCurrentQuestion(0);
    setQuizComplete(false);
  };

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

  const handleOptionClick = (isCorrect) => {
    updateScore(isCorrect);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
    setHighlighted(false);
  };

  const renderOptions = () => {
    const currentOptions = questions[currentQuestion].options;
    return currentOptions.map((option, index) => (
      <button
        key={index}
        className="choices"
        onClick={() => handleOptionClick(option.isCorrect)}
      >
        {option.text}
      </button>
    ));
  };

  const questionStyle = {
    color: highlighted ? "red" : "green",
    padding: "10px",
    textAlign: "center",
    fontSize: "30px",
    margin: "10px",
  };

  return (
    <div className="playground">
      {!quizComplete ? (
        <>
          <h2 className="Question">
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <div style={questionStyle}>{questions[currentQuestion].text}</div>
          <div className="options">{renderOptions()}</div>

          <div className="buttonContainer">
            <button className="highlight" onClick={handleHighlight}>
              Highlight
            </button>
            <button className="removeHighlight" onClick={handleRemoveHighlight}>
              Remove Highlight
            </button>
          </div>
        </>
      ) : (
        <Result
          count={score}
          totalQuestions={questions.length}
          replay={playAgain}
        />
      )}
    </div>
  );
}
