import { useState } from "react";
import "./App.css";
import QuestionBox from "./components/quizComponent";

export default function App() {
  const [page, clickPage] = useState(0);
  const [lightTheme, setLightTheme] = useState("Light");
  const [toggleButton, setColor] = useState(true);

  const theme = {
    darkTheme: {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
    },
    lightTheme: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
    },
  };

  const handleClick = () => {
    clickPage(1);
  };
  const handleBackgroundText = () => {
    setLightTheme((prevTheme) => !prevTheme);
    setColor(!toggleButton);
  };

  function StartPage() {
    return (
      <div className="centreAdjust">
        <div className="top-section">
          <h1 className="title">ReactQuiz</h1>
        </div>
        <button id="playBtn" onClick={handleClick}>
          Play Quiz!
        </button>
      </div>
    );
  }

  return (
    <div
      className="backGround"
      style={lightTheme ? theme.lightTheme : theme.darkTheme}
    >
      <div className="navbuttonContainer">
        <h1 id="kalvium"> Kalvium</h1>
        <button
          className={toggleButton ? "light" : "dark"}
          onClick={handleBackgroundText}
        >
          {toggleButton ? "dark" : "light"}
        </button>
      </div>

      <section className="sizeAdjust">
        {page === 0 ? StartPage() : <QuestionBox />}
      </section>
    </div>
  );
}
