import React from "react";

export default function Result(props) {
  // simple arithmetic formula to convert into percentage and toFixed for maintaining  float value like (40.00%)
  const percentage = ((props.count / props.totalQuestions) * 100).toFixed(2);

  return (
    <div className="Result">
      <h2>Your Results~ {percentage}%</h2>
      <h1>
        {props.count} Out of {props.totalQuestions}
      </h1>
      <button className='replay'onClick={props.replay}>Play Again</button>
    </div>
  );
}
