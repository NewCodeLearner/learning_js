const coding = ["cpp","java","ruby","js","python"]

//coding.forEach(function (item){
//    console.log(item)
//})

//coding.forEach( (item) =>{
//    console.log(item)
//})

function printme(item){
//    console.log(item)
}

coding.forEach(printme)

coding.forEach ( (item,index,arr) => {
    console.log(item,index,arr)
} )

const myCoding = [
    {
        languagename :"javascript",
        filename : "js"
    },
    {
        languagename :"java",
        filename : "java"
    },
    {
        languagename :"python",
        filename : "py"
    }
]

myCoding.forEach ( 
(item) => { console.log(item.languagename, item.filename)}
)