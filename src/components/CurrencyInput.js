import React from "react";

export default function CurrencyInput(props) {
  const {
    firstNum,
    setFirstNum,
    secondNum,
    setSecondNum,
    number,
    setNumber,
    currencies,
    getRate,
    switchValues,
  } = props;
  return (
    <div>
      <select
        type="text"
        value={firstNum}
        onChange={(e) => {
          setFirstNum(e.target.value);
        }}
      >
        {currencies.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <select
        type="text"
        value={secondNum}
        onChange={(e) => {
          setSecondNum(e.target.value);
        }}
      >
        {currencies.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button
        className="btnconvert"
        onClick={() => {
          getRate(firstNum, secondNum);
        }}
      >
        Convert
      </button>
      <button
        className="btnswitch"
        onClick={() => {
          switchValues(firstNum, secondNum);
        }}
      >
        <i class="fas fa-arrow-down"></i>
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
