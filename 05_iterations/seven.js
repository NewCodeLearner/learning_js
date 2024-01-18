//map

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map( (nums) => { return nums +10 } )
console.log(newnums);

const newnums2 = mynums
                    .map( (nums) => { return nums *10 } )
                    .map( (num) => (num + 1))
                    .filter( (num ) => {return num >40})
console.log(newnums2);
