// sum

// function sum(...args) {
//     let total = 0;
//     for (let i =0; i < args.length; i++){
//         total += args[i];

//     }
//     return total;
// }


function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        
    }
    return total;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);


// bind with args

// Function.prototype.myBind = function (ctx) {
//     let bindArgs = [];
//     for (i = 1; i<arguments.length; i++){
//         bindArgs.push(arguments[i])
//     } 
//     //Array.prototype.slice.call(arguments);
//     let that = this;
//     return function() {
//         let callArgs = [];
//         for (i = 0; i < arguments.length; i++) {
//             callArgs.push(arguments[i])
//         }
//         that.apply(ctx, bindArgs.concat(callArgs));
//     };
// };

Function.prototype.myBind = function (ctx, ...bindArgs) {
    let that = this;
    return function (...callArgs) { 
        that.apply(ctx, bindArgs.concat(callArgs));
    };
};



// new_function = oldFunction.myBind(context, 'apple')
// new_function(arg1, arg2)


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")(); 
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


// curriedSum


function curriedSum(num) {

    const numbers = [];
    return function _curriedSum(num1) {
        numbers.push(num1);
        if (numbers.length === num){
            let sum = numbers.reduce((a, b) => a + b);
            return sum;
        } else {
            return _curriedSum;
        }
    };

}


// const sum1 = curriedSum(4);
// console.log(sum1(5)(30)(20)(1)); // => 56




Function.prototype.curry = function(numArgs) {

    let args = [];
    const that = this;
    return function _curriedFunc(...callArgs) {
        args = args.concat(callArgs);
        if (args.length < numArgs){
            return _curriedFunc;
        } else {
            return that(...args);
        }
    };
};

printer = function (...args){
    args.forEach(ele => console.log(ele));
};

miniprinter = printer.curry(3);
miniprinter("one")("two")("three");