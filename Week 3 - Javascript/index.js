function add() {
  let no1 = parseFloat(document.getElementById("no1").value);
  let no2 = parseFloat(document.getElementById("no2").value);
  let result = document.getElementById("result");

  const sum = no1 + no2;
  result.innerHTML = `Addition: ${sum}`;
}

function multiply() {
  let no1 = parseFloat(document.getElementById("no1").value);
  let no2 = parseFloat(document.getElementById("no2").value);
  let result = document.getElementById("result");

  const product = no1 * no2;
  result.innerHTML = `Product: ${product}`;
}

function subtract() {
  let no1 = parseFloat(document.getElementById("no1").value);
  let no2 = parseFloat(document.getElementById("no2").value);
  let result = document.getElementById("result");

  const difference = no1 - no2;
  result.innerHTML = `Difference: ${difference}`;
}

function divide() {
  let no1 = parseFloat(document.getElementById("no1").value);
  let no2 = parseFloat(document.getElementById("no2").value);
  let result = document.getElementById("result");

  const quotient = no1 / no2;
  result.innerHTML = `Quotient: ${quotient}`;
}

function modulo() {
  let no1 = parseFloat(document.getElementById("no1").value);
  let no2 = parseFloat(document.getElementById("no2").value);
  let result = document.getElementById("result");

  const reminder = no1 % no2;
  result.innerHTML = `Reminder: ${reminder}`;
}

// let a = "aleena";
// console.log(a); // displays in the terminal (console)
// document.write(a); //displays in the dom
// alert("pop up message"); // pop up message

// document.write(typeof NaN); // O/P : number
// document.write(typeof []); // O/P: object

// if (0) {
//   alert("true");
// } else {
//   alert("false");
// }  //O/P : false

// if ([]) {        //import question
//   alert("true");
// } else {
//   alert("false");
// }  //O/P : true

// if (true == []) {  //import question
//   alert("true");
// } else {
//   alert("false");
// }  // O/P : false

// /*Withdrawn Successfully
// Insufficient Amount
// Invalid pin number
// */
// var pin = 1234;
// var balanceInBank = 1000;

// var userpin = Number(prompt("Enter you pin: "));
// var amount = Number(prompt("Enter you amount: "));

// if (userpin === pin) {
//   if (amount <= balanceInBank) {
//     alert("withdrawn successfully");
//   } else {
//     alert("insufficient balance");
//   }
// } else {
//   alert("wrong pin");
// }

// // reversing a string inside an array
// let arr = ["java"];
// console.log(arr[0][1]); //O/P:  a

// for (let i = arr[0].length - 1; i >= 0; i--) {
//   console.log(arr[0][i]);
// }

// function btnClick() {
//   let button = document.getElementById("btn");
//   let p = document.getElementById("p");

//   button.style.background = "red";
//   p.innerHTML = "The Text";
// }
