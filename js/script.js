// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of a triangle.
 */
function calculateArea() {
  // input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById("area").innerHTML = "Area = " + area + " cm²"
}
