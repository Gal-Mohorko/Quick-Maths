document.getElementsByClassName("the_end")[0].style.display = "none";

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

//. Sets global game_counter to 0
game_counter = 0;

//_ The random generation function
function random_generation() {
  //. Checks if game_counter is equal to 20, it returns to the_end(), otherwise does random_generation()
  if (game_counter == 20) {
    return the_end();
  } else {
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
}

//_ The main function
function submission() {
  //. Getting the answer from answer box and parsing into Int
  let user_answer = parseInt(document.getElementById("answer").value);

  //. Calculating the sum of the 2 numbers
  let addition_result = first_global + second_global;

  //. Checking if result and answer match && if game_counter is less than 20
  if (user_answer === addition_result && game_counter < 20) {
    game_counter += 1;
    document.getElementById("score").innerHTML = game_counter + " / 20 Correct";
  } else if (game_counter == 20) {
    //. random_generation() already checks this, but it returns to the_end() if game_counter = 20
    return the_end();
  } else {
    //. Leaves the score the same, since the player did not get the answer right
    document.getElementById("score").innerHTML = game_counter + " / 20 Correct";
  }

  //. Reseting result box and returning to random_generation()
  document.getElementById("answer").value = "";
  return random_generation();
}

//. Starts the sequence the first time
random_generation();

//_ The end function
function the_end() {
  //. Shows the end screen
  document.getElementsByClassName("the_end")[0].style.display = "initial";

  //. Removes everything else
  document.getElementById("first_number").style.display = "none";
  document.getElementById("operator").style.display = "none";
  document.getElementById("second_number").style.display = "none";
  document.getElementById("equal_sign").style.display = "none";

  document.getElementById("answer").style.display = "none";
  document.getElementById("score").style.display = "none";
}

//_ The restart function
function restart() {
  //. Shows everything
  document.getElementById("first_number").style.display = "initial";
  document.getElementById("operator").style.display = "initial";
  document.getElementById("second_number").style.display = "initial";
  document.getElementById("equal_sign").style.display = "initial";

  document.getElementById("answer").style.display = "initial";
  document.getElementById("score").style.display = "initial";

  //. Removes the end screen
  document.getElementsByClassName("the_end")[0].style.display = "none";

  //. Resets everything to start again
  document.getElementById("score").innerHTML = " 0 / 20 Correct";
  game_counter = 0;
  return random_generation();
}
