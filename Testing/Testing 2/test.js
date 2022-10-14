//_ Defining max. number of characters in answer box
user_input.oninput = function () {
  if (this.value.length > 0);
  this.value = this.value.slice(0, 3);
};

//_ Submitting by pressing Enter key
var submitting = document.getElementById("user_input");
submitting.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var not_0 = document.getElementById("user_input").value;
    if (not_0 === "") {
      return false;
    } else {
      document.getElementById("submit_button").click();
    }
  }
});
//. Global game counter
game_counter = 0;

//_ Generating 2 random numbers
//. Generating
function random_generation() {
  let first_random_number = Math.floor(Math.random() * 100);
  let second_random_number = Math.floor(Math.random() * 100);
  //. Making the 2 numbers global for return_text() function
  first_global = first_random_number;
  second_global = second_random_number;
  //. Writing in HTML
  document.getElementById("first_number").innerHTML = first_random_number;
  document.getElementById("second_number").innerHTML = second_random_number;
}

//_ The main function
function return_text() {
  //. Getting the answer the user wrote
  let user_answer_string = document.getElementById("user_input").value;
  let user_answer = parseInt(user_answer_string);
  console.log("Your answer is: " + user_answer);
  //. Calculating the sum of the 2 numbers
  let number_sum = first_global + second_global;
  console.log("The sum is: " + number_sum);

  if (user_answer === number_sum) {
    game_counter += 1;
    console.log(game_counter);
  }

  document.getElementById("user_input").value = "";
  return random_generation();
}

random_generation()