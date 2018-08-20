const btn = document.getElementById("checkBtn");
const display = document.getElementById("checkResult");
const inputBox = document.getElementById("input");

//Interacts with the DOM to display results computed by checkValue() to the user and displays related info if required conditions (eg. no input, incorrect length) are not met.
btn.onclick = () => {
  const input = inputBox.value;
  const result = checkValue(input);

  if (input.length === 0) {
    display.innerHTML = `<span style="color: red; text-shadow:none;">Please enter a 3-digit number`;
    return;
  }
  if (input.length !== 3) {
    display.innerHTML = `<span style="color: red; text-shadow:none;">Sorry! Only 3 digit numbers are accepted`;
    return;
  }
  if (result) {
    display.innerHTML = `<span style="color: greenyellow">Yay!!! ${input} is an Armstrong number!</span>`;
  } else {
    display.innerHTML = `<span style="color: red">SORRY!...</span> ${input} is not an Armstrong number.`;
  }
};

//Performs actual calculations to verify the 'armstrong-ness' of the input and outputs result to the user
function checkValue(val) {
  let output = 0;
  for (const char of val) {
    output += Math.pow(char, 3);
  }
  if (output == val) {
    return true || false;
  }
}

//Styles the RunCheck btn and resets div display based on user input.
inputBox.oninput = () => {
  display.innerHTML = ""; //reset div display
  const input = inputBox.value;
  if (input.length === 0) {
    btn.style.cursor = "not-allowed";
    btn.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    btn.style.opacity = 0.5;
    return;
  }
  btn.style.cursor = input.length === 3 ? "pointer" : "not-allowed";
  btn.style.backgroundColor = input.length === 3 ? "green" : "red";
  btn.style.opacity = input.length === 3 ? 1 : 0.3;
};

//***********MODAL**********/
const modal = document.getElementById("modalDiv"); // Get the modal
const mD = document.getElementById("info"); // Get the text that opens the modal
const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

// Open the modal when the user clicks on the text,
mD.onclick = () => {
  modal.style.display = "block";
};
// Close the modal when the user clicks on <span> (x)
span.onclick = () => {
  modal.style.display = "none";
};

// Also close the modal when the user clicks anywhere outside of the modal,
window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
