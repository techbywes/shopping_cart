"use strict";

let InputField = document.getElementById("input_field");
let AddToCartBtn = document.getElementById("add-button");

AddToCartBtn.addEventListener("click", function () {
  let inputValue = InputField.value;
  console.log(inputValue);
  InputField.value = " ";
});
