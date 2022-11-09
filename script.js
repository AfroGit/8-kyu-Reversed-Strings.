"use strict";

function reverseNoun(str){
  // return str.split("").reverse().join("");
  splitNoun = str.split("");
  reverseArray = splitNoun.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
  }
   console.log(reverseNoun("This Was Fun"))

