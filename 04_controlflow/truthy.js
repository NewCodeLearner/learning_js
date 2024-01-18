const useremail ="girish@email"

if(useremail){
    console.log("got user email")
}
else
{
    console.log("no user email")
}


//falsy
//false , 0 , -0 , BigInt 0n , "" , null , NaN

//rest all are truthy values --any value within string is truthy value
// true, "0" , 'false' , " " ,[], {} , function(){}


//nullish coalescing operator (??) : null undefined

let val1

//val1 = 5 ?? 10
//5

//val1 = null ?? 10
// 10

//val1 = undefined ?? 15
//15

val1 
console.log(val1)
