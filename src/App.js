import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyDisplay from "./components/CurrencyDisplay";

function App() {
  const [firstNum, setFirstNum] = useState("EUR");
  const [secondNum, setSecondNum] = useState("USD");
  const [rate, setRate] = useState();
  const [number, setNumber] = useState(1);
  const currencies = [
    "EUR",
    "USD",
    "CAD",
    "CZK",
    "GBP",
    "CHF",
    "AED",
    "NZD",
    "SGD",
    "BND",
  ];

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=EUR_USD&compact=ultra&apiKey=cc96818b2160002deeef`,
    }).then((response) => {
      setRate(response.data.EUR_USD);
    });
  }, []);

  useEffect(() => {
    getRate(firstNum, secondNum);
  }, [number]);

  const getRate = (firstNum, secondNum) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${firstNum}_${secondNum}&compact=ultra&apiKey=cc96818b2160002deeef`,
    }).then((response) => {
      setRate(number * response.data[`${firstNum}_${secondNum}`]);
    });
  };

  const switchValues = (firstNum, secondNum) => {
    const firstValue = firstNum;
    const secondValue = secondNum;
    setFirstNum(secondValue);
    setSecondNum(firstValue);
    getRate(secondNum, firstNum);
  };

  return (
    <div className="App">
      <CurrencyDisplay
        number={number}
        firstNum={firstNum}
        rate={rate}
        secondNum={secondNum}
      />
      <CurrencyInput
        firstNum={firstNum}
        setFirstNum={setFirstNum}
        secondNum={secondNum}
        setSecondNum={setSecondNum}
        number={number}
        currencies={currencies}
        setNumber={setNumber}
        getRate={getRate}
        switchValues={switchValues}
      />
    </div>
  );
}

export default App;
