// for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}


const myarr = ["hulk","batman","superman"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element)
    
}

//break and continue

//for (let index = 0; index < 20; index++) {
 //   if(index ==5 ){
//    console.log("detected 5");
//    break;
//    }
//    console.log(index)
//}


for (let index = 0; index < 20; index++) {
    if(index ==5 ){
    console.log("detected 5");
    continue;
    }
    console.log(index)
}


//while
let index =0
while (index <10) {
    console.log(index)
    index = index + 2;
}