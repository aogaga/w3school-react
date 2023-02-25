class Car{
    constructor(name){
        this.brandName = name;
    }

    present(){
        return 'I have a ' + this.brandName;
    }
}


// const car = new Car("Ford");
// console.log(car.present());


class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }

    show(){
        return this.present() + ' it is a ' + this.model;
    }
}

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());


// 
hello = function(){
    return "Hello World !";
}

helloWorld = () => {
    return "Hello World !!!!";
}

console.log(helloWorld())