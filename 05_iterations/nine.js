//reduce

const mynums =[1,2,3,4,5]

const initialvalue =0;

const sumwithintial = mynums.reduce( (acc,currval) => { 
    console.log(`acc = ${acc} and current value ${currval}`);
    return acc+currval 
},0 )
console.log(sumwithintial);
