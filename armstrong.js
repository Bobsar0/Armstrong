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

let btn = document.getElementById("checkBtn");

//armstrong() interacts with the DOM to display results computed by checkValue() to the user
function armstrong(){ 
  const input = document.getElementById("input").value;
  const display = document.getElementById("checkResult")
  if (input.length === 0){
    display.innerHTML= `<span style="color: red; text-shadow:none;">Please enter a 3-digit number`;
    return
  }
  if (input.length !== 3){
    display.innerHTML= `<span style="color: red; text-shadow:none;">Sorry! Only 3 digit numbers are accepted`;
    return
  }
  const result = checkValue(input);
  if (result){
    display.innerHTML = `<span style="color: greenyellow">Yay!!! ${input} is an Armstrong number!</span>`
  }else{
    display.innerHTML = `<span style="color: red">SORRY!...</span> ${input} is not an Armstrong number.`
  }
}

//checkInput verifies that the correct length of 3-digit integers is inputted by user and informs user if otherwise
function checkInput(){
  const input = document.getElementById("input").value;
  if (input.length !== 3){
    btn.style.cursor = "not-allowed";
    btn.style.opacity = 0.6;
  }else{
    btn.style.cursor = "pointer";
    btn.style.opacity = 1;
  }
}

//checkValue performs actual calculations to verify the armstrong-ness of the input and outputs result to the user
function checkValue(val){
  let output = 0;
  for(char of val){
    output += char**3
  }
  if(output==val){
    return true || false
  }
}