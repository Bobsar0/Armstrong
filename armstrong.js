/********** TDD STEPS - Features to implement ***********/
//FUNCTIONALITY
//1. Should take in number to be checked
//2. Should determine that the number is a 3 digit integer
//3. Should run check and display the result
//4. Should alert user as to why a deactivated button shouldn't be clicked

//DOM MANIPULATION
//1. Should inject initial HTML
//2. Should display an input field
//3. Should display a "run check" button
//4. Should deactivate "run check" button on invalid input
//5  Should display massege if deactivated "run check" button is clicked
//6. Should display result on a div
/***************************************************/

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

//Styles the Run Check btn based on user input
btn.onmouseover = () => {
  const input = inputBox.value;
  if (input.length !== 3) {
    btn.style.cursor = "not-allowed";
    btn.style.opacity = 0.3;
    btn.style.backgroundColor = "red";
  } else {
    btn.style.cursor = "pointer";
    btn.style.opacity = 1;
    btn.style.backgroundColor = "green";
  }
};

//Resets div display
inputBox.onclick = () => {
  display.innerHTML = "";
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
