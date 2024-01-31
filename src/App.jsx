import { useState } from "react";
import "./App.css";
import QuestionBox from "./components/quizComponent";

export default function App() {

  // Declaring States
  const [page, clickPage] = useState(0);
  const [lightTheme, setLightTheme] = useState("Light");
  const [toggleButton, setColor] = useState(true);


  // Creating Objects for toggle button 
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

  //  handlingClick function and if user click on play quiz  , it will direct to playground page.
  const handleClick = () => {
    clickPage(1);
  };

  // background color of toggle button and maintaining background color of body.
  const handleBackgroundText = () => {
    setLightTheme((prevTheme) => !prevTheme);
    setColor(!toggleButton);
  };
  
  // Start page function 
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

  //  return of App components 
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
     
     {/* Checking conditions whether to navigating to question box component or stay on start page components */}
      <section className="sizeAdjust">
        {page === 0 ? StartPage() : <QuestionBox />}
      </section>
    </div>
  );
}
