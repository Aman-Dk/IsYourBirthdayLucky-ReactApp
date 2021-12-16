import { useState } from "react";
import "./styles.css";

export default function App() {
  var [date, setDate] = useState("");
  var [luckyNum, setLuckyNum] = useState("");

  function output(msg) {
    document.querySelector("#output").innerHTML = "";
    document.querySelector("#output").innerHTML = msg;
  }
  function getDate(event) {
    setDate(event.target.value);
  }

  function getLuckyNumber(event) {
    setLuckyNum(event.target.value);
  }

  function sumOfDate(date) {
    var sum = 0;
    while (date !== 0) {
      sum += Math.round(date % 10);
      date /= 10;
    }
    return sum;
  }

  function convertDateToString(date) {
    var convertedDate = date.replaceAll("-", "");
    return convertedDate;
  }

  function check4LuckyNumber(date, num) {
    if (date % num === 0) {
      output(
        `<span id='col'>Congrats 🤩, ${num}</span> is a <span id='col'>lucky</span> number`
      );
    } else {
      output(
        `<span id='col-negative'>Sorry, ${num}</span> is not a <span id='col-negative'>lucky</span> number`
      );
      // setOutput(`Sorry, ${num} is not a lucky number`);
    }
  }

  function clickHandler() {
    var inputDate = date;
    var str1 = convertDateToString(inputDate);
    str1 = sumOfDate(str1);
    var str2 = luckyNum;
    console.log(str1, str2);
    check4LuckyNumber(str1, str2);
  }

  return (
    <div className="App">
      <h1>
        Is Your <span id="col">Birthday</span> Lucky
        <span id="col" role="img" aria-label="think-icon">
          🤔
        </span>
        <hr />
      </h1>

      <p>Date Of Birth:</p>

      <input type="date" onChange={getDate}></input>
      <p>Lucky Number:</p>
      <input type="number" onChange={getLuckyNumber}></input>

      <button onClick={clickHandler}>Check</button>

      <div id="output"></div>
    </div>
  );
}
