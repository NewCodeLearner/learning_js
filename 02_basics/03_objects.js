//singleton
//Object.Create

//object literals

const mySym = Symbol("key1")

const JsUser =  { 
    name:"Girish",
    "full name" : "Girish Barhate",
    [mySym]: "mysym1",
    age:37,
    location : "Pune",
    email : "girish@google.com",
    isLoggedIn : false
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])


JsUser.email = "girish@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "girish@chat.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log ("Greetings!");
}

JsUser.greeting2 = function(){
    console.log (`Greetings! ${this["full name"]}`);
}



//console.log(JsUser.greeting)

console.log(JsUser.greeting())
console.log(JsUser.greeting2())