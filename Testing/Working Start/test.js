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

function return_text() {
  let input = document.getElementById("user_input").value;
  console.log(input);
}
