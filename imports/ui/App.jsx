import React, { useState } from "react";
import { Word } from "./Word";

export const App = () => {
  const [from, setFrom] = useState(5);
  const [to, setTo] = useState(95);
  const [feedback, setFeedback] = useState("");

  const getWords = function() {
    const words = [];
    for (let i = from; i <= to; i++) {
      words.push(<Word number={i} key={i}/>);
    }
    return words;
  };

  return (
    <div>
      <h1>RobotICT App</h1>
      <h2>Set range between 1 and 100:</h2>
      <input
        min={1}
        max={99}
        value={from}
        type="number"
        onChange={evt => {
          let val = Number.parseInt(evt.target.value);
          if (val > 0 && val < to) {
            setFrom(val);
            setFeedback("");
          } else {
            setFeedback("Number must be 1-99 and lower than upper range.");
          }
        }}
      />
      <input
        min={2}
        max={100}
        value={to}
        type="number"
        onChange={evt => {
          let val = Number.parseInt(evt.target.value);
          if (val > 1 && val > from && val < 101) {
            setTo(val);
            setFeedback("");
          } else {
            setFeedback("Number must be 2-100 and higher than lower range.");
          }
        }}
      />
      {feedback && <p className="feedback">{feedback}</p>}
      {getWords()}
    </div>
  );
};
