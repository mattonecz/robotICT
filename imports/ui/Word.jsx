import React from "react";

export const Word = props => {
  const getWord = function() {
    const number = props.number;
    if (number % 3 == 0 && number % 5 == 0) {
      return "RobotICT";
    }
    if (number % 3 == 0) {
      return "Robot";
    }
    if (number % 5 == 0) {
      return "ICT";
    }
    return number.toString();
  };

  return (
    <div>
      <ul>{getWord()}</ul>
    </div>
  );
};
