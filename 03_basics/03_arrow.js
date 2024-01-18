const user = {
    username: "Girish",
    price : 199,

    welcomeMessage : function(){
        console.log (`${this.username}, welcome to the website`);
  //      console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage()

//console.log(this)

const chai = () => {
    let username ="Girish"
    console.log(this)
}

//chai()

//const addTwo = (num1 , num2) => { return num1 + num2} //explicit return ,,return keyword has to be used in curly braces

const addTwo = (num1 , num2) =>  (num1 + num2) //implicit return

console.log(addTwo(3,4))