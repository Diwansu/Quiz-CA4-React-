import React, { useState } from "react";
import questions from "./questions";
import Result from "./Result";

export default function QuestionBox() {

  // Declaring States
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Checking Correct answers from questions array and by using dot notation of objection checking whether user clicked option is correct or not
  // and if correct updating score.
  const updateScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  // Creating PlayAgain function for Play Again button to redirect user to quiz component.
  const playAgain = () => {
    setScore(0);
    setHighlighted(false);
    setCurrentQuestion(0);
    setQuizComplete(false);
  };

  // function to update highlight of question where use State has been used.
  const handleHighlight = () => {
    setHighlighted(true);
  };

  //function to update removeHighlight of question where use State has been used
  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

    // Function to  handling option clicked , calling to update score function, moving to next question after clicking the appeared options.
    // and updating quizComplete state.
  const handleOptionClick = (isCorrect) => {
    updateScore(isCorrect);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
    setHighlighted(false);
  };

  // Functions to extract options from questions array and by using map functions of it. Filling the options in respective created Divs.
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

  // Object for handling highlight function.
  const questionStyle = {
    color: highlighted ? "red" : "green",
    padding: "10px",
    textAlign: "center",
    fontSize: "30px",
    margin: "10px",
  };
  
  // return function of quiz component and passing props to result component if quizComplete state becomes true.
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
      )  : (
        <Result
          count={score}
          totalQuestions={questions.length}
          replay={playAgain}
        />
      )}
    </div>
  );
}
