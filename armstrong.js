//armstrong() interacts with the DOM to display results computed by checkValue() to the user
function armstrong(){
    const input = document.getElementById("input").value;
    const inputStr = input.toString()
    if (inputStr.length != 3){
        alert("Sorry, input should be of 3 digits")
    }
    let result = check(inputStr);
    if (result){
        document.getElementById("checkResult").innerHTML = `<span style="color: green">Yay!!!</span> ${input} is an Armstrong number!`
    }else{
        document.getElementById("checkResult").innerHTML = `<span style="color: red">Sorry!...</span> ${input} is not an Armstrong number.`
    }
}

//check() performs actual calculations to verify the armstrong-ness of the input and outputs result to the user
function check(val){
    let output = 0;
    for(char of val){
        output += Math.pow(Number(char), 3);
    }
    console.log(`Output: ${output}`);
    if(output==val){
        return true
    }
    return false;
}

//checkRecur() performs same calculations as check() recursively
function checkRecur(val){
    let output = 0;
    for(char of val){
        output += recursive(Number(char), 3);
    }
    console.log(`Rec Output: ${output}`);
    if(output==value){
        return true
    }
    return false;}

function recursive(a,b){
    if(b === 0){
        return 1;
    }
    return a * (recursive(a, b-1));
}