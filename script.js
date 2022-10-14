//_ Defining maximum number of characters in answer box
answer.oninput = function () {
  if (this.value.lenght > 0);
  this.value = this.value.slice(0, 3);
};

//_ Submitting by pressing Enter key
var submitting = document.getElementById("answer");
submitting.addEventListener("keyup", function (event) {
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

//. Global game counter
game_counter = 0;

//_ Generating 2 random numbers
function random_generation() {
  //. The generation
  let first_random_number = Math.floor(Math.random() * 100);
  let second_random_number = Math.floor(Math.random() * 100);

  //. Making the 2 numbers global
  first_global = first_random_number;
  second_global = second_random_number;

  //. Writing them in HTML
  document.getElementById("first_number").innerHTML = first_random_number;
  document.getElementById("second_number").innerHTML = second_random_number;
}

//_ The main function
function submission() {
  //. Getting the answer from answer box and parsing into Int
  let user_answer = parseInt(document.getElementById("answer").value);

  //. Calculating the sum of the 2 numbers
  let addition_result = first_global + second_global;

  //. Checking if result and answer match
  if (user_answer === addition_result) {
    game_counter += 1;
    document.getElementById("score").innerHTML = game_counter + " / 20 Correct";
  } else {
    document.getElementById("score").innerHTML = game_counter + " / 20 Correct";
  }

  document.getElementById("answer").value = "";
  return random_generation();
}



random_generation();
