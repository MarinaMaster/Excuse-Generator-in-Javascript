/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const excuse = document.getElementById("excuse");
window.onload = function() {
  //write your code here
  let string = [];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random() * when.length);
  string = `${who[whoExcuse]} ${action[actionExcuse]} ${what[whatExcuse]} ${when[whenExcuse]}`;
  excuse.innerText = string;
};
