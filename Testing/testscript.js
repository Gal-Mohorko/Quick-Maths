// // //_ Defining max. number of characters in answer box
// // answer.oninput = function () {
// //   if (this.value.length > 0);
// //   this.value = this.value.slice(0, 3);
// // };

// // //_ Submitting by pressing Enter key
// // var input = document.getElementById("answer");
// // input.addEventListener("keyup", function (event) {
// //   if (event.keyCode === 13) {
// //     event.preventDefault();
// //     var not_0 = document.getElementById("answer").value;
// //     if (not_0 === "") {
// //       return false;
// //     } else {
// //       document.getElementById("submit_button").click();
// //     }
// //   }
// // });



//! GENERATING 2 RANDOM NUMBERS AND PLACING THEM ON THE DOCUMENT
let first_number = Math.floor(Math.random() * 100);
let second_number = Math.floor(Math.random() * 100);
document.getElementById("first_number").innerHTML = first_number;
document.getElementById("second_number").innerHTML = second_number;
//! GLOBAL 2 RANDOM NUMBER VALUE
number1 = first_number;
number2 = second_number;

//! GETTING THE RESULT OF THE 2 RANDOM NUMBERS
let addition_result = first_number + second_number;

//! GETTING WHAT WE TYPED
// let addition_answer = document.getElementById("answer").value;
//! MAKING WHAT WE TYPED GLOBAL
// var test1 = parseInt(addition_answer);
// console.log(addition_answer + " is the NUMBER THAT YOU PUT IN");
// addition_answer_global = test1;


// console.log("Your result is" + addition_answer);
console.log(addition_result + " is the answer");

let game_counter = 0;

// if (addition_answer === addition_result) {
//     game_counter += 1;
//     console.log("YOUR SCORE IS " + game_counter)
// }

function submission() {
  console.log(document.getElementById("answer").value);
  let addition_answer = document.getElementById("answer").value;
  console.log(addition_answer + "----------------------");

  if (addition_answer === addition_result) {
    game_counter += 1;
    console.log("YOUR SCORE IS " + game_counter);
  }

  console.log(number1 +  " " + number2 + "Hello");
  console.log("THis is when it is submitted; the answer" + addition_answer);
  console.log(typeof number1 + typeof number2 + typeof test1);
}


//_ Defining max. number of characters in answer box
answer.oninput = function () {
    if (this.value.length > 0);
    this.value = this.value.slice(0, 3);
  };
  
  //_ Submitting by pressing Enter key
  var input = document.getElementById("answer");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var not_0 = document.getElementById("answer").value;
      if (not_0 === "") {
        return false;
      } else {
        document.getElementById("submit_button").click();
      }
    }
  });
  