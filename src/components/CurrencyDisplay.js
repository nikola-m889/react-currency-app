import React from "react";

export default function CurrencyDisplay(props) {
  const { number, firstNum, rate, secondNum } = props;
  return (
    <div className="displayWindow">
      {number} {firstNum} = {rate} {secondNum}
    </div>
  );
}
