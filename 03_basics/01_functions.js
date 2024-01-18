function sayMyName(){
    console.log("G")
    console.log("I")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
}

//sayMyName()

//function addtwonumbers(number1,number2){
 //   console.log(number1+number2)
//}
function addtwonumbers(number1,number2){
   // let result =  number1+number2
   // return result
    return number1+number2
}
const result = addtwonumbers(3,5)

//console.log("Result" ,result)

function loginUserMessage(username){
    if (username ===undefined)
    {
        console.log("Please enter a username");
        return
    }
    return ` ${username} just logged in`
}

//console.log(loginUserMessage("Girish"));
//Girish just logged in

//console.log(loginUserMessage());
//undefined just logged in


/// ... used as REST operator packs all values into one array
function calculateCartPrice(...num1){

    return num1;
}

console.log(calculateCartPrice(200,400,5000))