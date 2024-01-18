//Immediatly invoked function execution (IIFE)
// 2 IIFEs in one file.

(function chai(){
    //named IIFE
    console.log("DB CONNECTED")
})();  //semicolon is needed to end the context of IIFE scope

( () => { 
    //unnamed iife
    console.log("DB CONNECTED TWO")
} )()