// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function checks users age and the type of movie they can watch
 */
// eslint-disable-next-line no-unused-vars


function checkAge() {
  // input
  const userAge = document.getElementById("user-age").checked

  // process
  if (userAge >= 17) {
    //output
    document.getElementById("result").innerHTML =
      "You can watch R rated movies alone"
  } else if (userAge >= 13) {
    //output
    document.getElementById("result").innerHTML =
      "You can watch PG-13 movies alone"
  } else if (userAge >= 5) {
    //output
    document.getElementById("result").innerHTML =
      "You can watch  g or pg movies alone"
  } else {
    //output
    document.getElementById("result").innerHTML =
      "You are too young for most movies"
  }
}
