//const tinderUser = new Object() //singlton

const tinderUser = {}
tinderUser.id=1
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email :"some@email.com",
    fullname : {
        userfullname:{
            firstname:"Girish",
            lastname: "Barhate"
        }
    }

}

//console.log(regularUser.fullname)
//{ userfullname: { firstname: 'Girish', lastname: 'Barhate' } }
//console.log(regularUser.fullname.userfullname.firstname)
//Girish

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

//const obj3 ={obj1,obj2}
//console.log(obj3)
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = Object.assign({},obj1,obj2)
///console.log(obj3)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2}
console.log(obj3)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users =[
    {
        ID : 1

    }
    ,{}
    ,{}
]

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));


const course ={

    coursename: "JS in Hindi",
    price : 999,
    teacher: "Girish"
}

//course.teacher

//object destructuring
const{teacher : tutor} = course

console.log(tutor);

//{
//    "coursename": "JS in Hindi",
//    "price" : 999,
//    "teacher": "Girish"
//}