console.log("hi there");

// think of an array as a box, so use the squre brackets
let myArray = [
    1,
    2,
    3,
    "eric",
    "Sally",
    "Kara",
    { name: "eric", age: "old"},
    [1,2,3,"eric"]
]

console.log(myArray);

let person = {
    name: "Eric",
    age: 40,
    height: "5 foot",

    blink: function() {
        console.log("the eyes open and close");
    }
};

console.log(person.name);
console.log(person.blink());


// constructor function that will create objects
function Person(name, age, height, hairColor, eyeColor, shirtSize) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.shirtSize = shirtSize;
}

Person.prototype.blink = function() {
    console.log(this.name + " opened and closed their eyes.");
};

let eric = new Person("eric", 40, "5 feet", "salt and pepper", "brown", "xl");

console.log(eric);
console.log(eric.name);
console.log(`${eric.name} is ${eric.age} years old. He has ${eric.hairColor} hair.`);  // Template literal|syntax
// console.log(eric.blink());


// class instead of constructor function
// class is the modern way of doing this constructor function, not repurposing a function to create an object
// this is where you ultimately wind up
class Persona {
    constructor(name, age, height, hairColor, eyeColor, shirtSize) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.shirtSize = shirtSize;
    }

    blink() {
        console.log(this.name + " blinked!");
    }

    eat() {
        console.log(this.name + " ate!");
    }
}

let erica = new Persona("erica", 40, "5 feet", "salt and pepper", "brown", "xl");
erica.blink();
erica.eat();