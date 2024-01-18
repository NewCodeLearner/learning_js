const marvel_heroes = ["spiderman","thor","Ironman"]

const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);
//[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

//marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes);
//[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

//const allheros = marvel_heroes.concat(dc_heroes)
//console.log(allheros);

const allnewheros = [...marvel_heroes,...dc_heroes]
console.log(allnewheros)

const another_array = [1,2,3,[4,5,[6,7,[8,9]]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)
//[    1, 2, 3, 4, 5,    6, 7, 8, 9  ]


console.log(Array.isArray("Girish"));

console.log(Array.from("Girish"));

console.log(Array.from({name:"Girish"})); //Interesting

let score1 =100

let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));



 