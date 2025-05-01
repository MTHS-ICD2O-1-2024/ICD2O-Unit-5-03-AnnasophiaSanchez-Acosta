// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function checks users age 
 */


function checkAge() {
  // input
  const userAge = document.getElementById("user-age").checked

  // process
  if (userAge >= 17) {
    //output
    document.getElementById("result").innerHTML =
      "You can watch R rated movies alone"
      //output
  } else if (userAge >= 13) {
    document.getElementById("result").innerHTML =
      "You can watch PG-13 movies alone"
      //output
  } else if (userAge >= 5) {
    document.getElementById("result").innerHTML =
      "You can watch  g or pg movies alone"
      //output
  } else {
    document.getElementById("result").innerHTML =
      "You are to young for most movies"
  }
}
