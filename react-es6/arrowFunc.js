hello = function(){
    return "Hello World !";
}


helloWorld = () => {
    return "Hello World !!";
}

ello = () => "Hello World !!!";


elloWulrd = (val) => "Hello " + val;


// evaluate this keyword in arrow function 


class Header {
    constructor(){
        this.color = "Red";
    }
}


changeColor = function(){
    document.getElementById("demo").innerHTML += this;
}

const myHeader = new Header();

window.addEventListener("load", myHeader.changeColor);

document.getElementById("btn").addEventListener("click", myHeader.changeColor);