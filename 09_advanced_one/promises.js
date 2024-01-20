const promiseOne = new Promise(function(resolve,reject) {
    //do an async call
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
}
)


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is complete");
        resolve() 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = 
new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username:'Chai',email:"chai@example.com"})

},1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"hitesh",password : "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.
then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promise is either resolved or rejected Finally");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript",password : "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error) 
    }

}

consumePromiseFive()


async function getallusers(){
    try {
     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
     const data = await response.json()
     console.log(data)  
    } catch (error) {
        console.log(error) 
    }

}

getallusers()


