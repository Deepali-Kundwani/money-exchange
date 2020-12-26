import React, { useState } from "react";
import "./styles.css";
var input = 0;
var input1 = 0;
var difference = 0;
var diff = 0;
var i = 0;

export default function App() {
  var [output, setOutput] = useState("");
  var [output1, setOutput1] = useState("");
  var [output2, setOutput2] = useState("");
  var [output3, setOutput3] = useState("");
  var [output4, setOutput4] = useState("");
  var [output5, setOutput5] = useState("");
  var [output6, setOutput6] = useState("");

  function changeHandler(key) {
    input = key.target.value;
  }

  function changeHandler1(key1) {
    input1 = key1.target.value;
  }

  function clickHandler(key2) {
    difference = input1 - input;
    diff = difference;
    for (var counter = 0; difference > 0; ) {
      if (difference >= 2000) {
        for (counter = 0; diff >= 2000; ) {
          counter = counter + 2000;
          // console.log(counter);
          //console.log(you need )
          diff = difference - counter;

          i++;
        }
        console.log("you have to give " + i + " notes of 2000 Rs");
        output = "you have to give " + i + " notes of 2000 Rs";
      } else if (difference >= 500) {
        for (counter = 0; diff >= 500; ) {
          counter = counter + 500;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 500 Rs");
        output1 = "you have to give " + i + " notes of 500 Rs";
      } else if (difference >= 100) {
        for (counter = 0; diff >= 100; ) {
          counter = counter + 100;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 100 Rs");
        // setOutput(output);
        output2 = "you have to give " + i + " notes of 100 Rs";
      } else if (difference >= 20) {
        for (var counter = 0; diff >= 20; ) {
          counter = counter + 20;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 20 Rs");
        //  setOutput(output);
        output3 = "you have to give " + i + " notes of 20 Rs";
      } else if (difference >= 10) {
        for (var counter = 0; diff >= 10; ) {
          counter = counter + 10;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 10 Rs");
        //setOutput(output);
        output4 = "you have to give " + i + " notes of 10 Rs";
      } else if (difference >= 5) {
        for (var counter = 0; diff >= 5; ) {
          counter = counter + 5;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 5 Rs");
        // setOutput(output);
        output5 = "you have to give " + i + " notes of 5 Rs";
      } else {
        for (var counter = 0; diff >= 1; ) {
          counter = counter + 1;
          //console.log(counter);
          diff = difference - counter;
          i++;
        }
        console.log("you have to give " + i + " notes of 1 Rs");
        //setOutput(output);
        output6 = "you have to give " + i + " notes of 1 Rs";
      }

      difference = diff;
      counter = 0;
      i = 0;
    }
    setOutput(output);
    setOutput1(output1);
    setOutput2(output2);
    setOutput3(output3);
    setOutput4(output4);
    setOutput5(output5);
    setOutput6(output6);
  }

  return (
    <div className="App">
      <h2 className="heading">enter the bill amount below</h2>
      <input className="inp-txt" onChange={changeHandler} />
      <h2 className="heading">enter the currency note given by customer</h2>
      <input className="inp-txt" onChange={changeHandler1} />
      <h2 className="heading">Get the change below to return</h2>
      <button id="btn-txt" onClick={() => clickHandler("button1")}>
        ClickMe
      </button>
      <div className="div1">
        <div className="division">{output}</div>
        <div className="division">{output1}</div>
        <div className="division">{output2}</div>
        <div className="division">{output3}</div>
        <div className="division">{output4}</div>
        <div className="division">{output5}</div>
        <div className="division">{output6}</div>
      </div>
    </div>
  );
}
