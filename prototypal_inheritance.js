// Function.prototype.inherits = function(parentClass) {

//     function Surrogate() {};
//     Surrogate.prototype = parentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;

// }

Function.prototype.inherits = function (parentClass) {
    this.prototype = Object.create(parentClass.prototype);
    // creates an object whose __proto__ points to the argument provided
}

// new Surrogate() 
//     1) makes that new Object, the instance of Surrogate
//     2) __proto__ property of this instance Object to parentClass.protoype

//     Child.prototype = new Surrogate(); => __proto__ to parentClass.prototype
//     new Child (child instance)

//     some __proto__ points to Object.prototype: __proto__ = null;


//Standard

// function MovingObject() { 
    
// }
// MovingObject.prototype.printExample = function() {
//     console.log('Example 1')
// }

//Class Syntax

class MovingObject {
    constructor() {}

    printExample() {
        console.log('Example 1')
    }
}


//---------------------------------------------------

function Ship() { 

}
Ship.inherits(MovingObject);

Ship.prototype.printExample2 = function () {
    console.log('Example 2')
}

//---------------------------------------------------

function Asteroid() { 

}
Asteroid.inherits(MovingObject);
Asteroid.inherits(Ship);

Asteroid.prototype.printExample3 = function() {
    console.log('Example 3')
}

const ship1 = new Ship();
ship1.printExample();
// ship1.printExample3();

const asteroid1 = new Asteroid();
asteroid1.printExample2();

const moving1 = new MovingObject();
// moving1.printExample1();

// console.log(moving1.__proto__ == moving1.prototype)

// Cat.prototype.someFunction
// Cat.__proto__ => Animals prototype


console.log(Ship.prototype.__proto__ == MovingObject.prototype);

// prototype is the object, __proto__ is the property that points to the next object in the chain