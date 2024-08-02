// this keyword

// 1
console.log(this)

// 2
function showThis() {
    console.log(this);
}

showThis();

// 3

const obj = {
    showThis() {
        console.log(this)
    }
}

obj.showThis();

// 4
function Person(name) {
    this.name = name; // this - прирівнюється до новостворенних проєктів
    this.sayHello = function() {
        console.log(`'Hello' ${this.name}`)
    }
}

const person1 = new Person('Vilaly');
person1.sayHello();

// 5
class Person {
    constructor(name) {
        this.name = name;
    }
    showThis() {
        console.log(`Hello ${this.name}`)
    }
}
const person_1 = new Person('Vitaly')
person_1.showThis();

// 6

const obj_1 = {
    sayHello() {
        function inner() {
            console.log(this);
        }
        inner();
    },
    sayHelloArrow() {
        const inner = () => {
            console.log(this)
        };
        inner();
    }
};

obj.sayHello();
obj.sayHelloArrow();

// 7 
const obj01 = {name: 'Vitaly'};
const obj02 = {
    sayHello(a, b ,c) {
        console.log(a, b, c)
        console.log(this.name)
    },
};

obj02.sayHello.call(obj01, 1, 2, 3);
obj02.sayHello.apply(obj01, [1, 2 ,3]);

// 8 

const obj_01 = {age: 25};
function sayHello() {
    console.log(this.age)
}

const updatedContextSayHello = sayHello.bind(obj1_01)
updatedContextSayHello();