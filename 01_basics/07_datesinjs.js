let mydate = new Date()

//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());

//console.log(typeof mydate);


let mycreateddate = new Date(2024,0,18)
console.log(mycreateddate.toLocaleString());


let mytimestamp = Date.now()

//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newdate = new Date()

console.log(newdate.getMonth() +1) //month starts from 0 

newdate.toLocaleString('default',{
    weekday: "long"
})