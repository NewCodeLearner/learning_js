//generate random color

const randomColor = function(){
    const hex ="0123456789ABCBEF";
    let color ='#'

    for (i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}

//console.log(randomColor())

let intervalid;

const startchangingcolor = function(){
    if(!intervalid){
     intervalid = setInterval(chnagebgcolor, 1000);
        }
    
    function chnagebgcolor(){
    document.body.style.backgroundColor=randomColor();
    }
}

const stopchangingcolor = function(){
    clearInterval(intervalid);
    intervalid=null;
}

document.querySelector('#start')
.addEventListener('click',startchangingcolor)

document.querySelector('#stop')
.addEventListener('click',stopchangingcolor)