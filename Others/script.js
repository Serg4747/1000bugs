/* let oh = document.querySelector('.item');
console.log(`offsetHeight= ${oh.offsetHeight}`);
console.log(`clientHeight= ${oh.clientHeight}`);
console.log(`scrollHeight= ${oh.scrollHeight}`);

let arr = [1, 8, 3, 6, 5],
    arr2 = [];
// arr.forEach(elem=>{
//     arr2.unshift(elem);
// });
// console.log(arr2);

for(const item of arr) {
    arr2.unshift(item);
}
console.log(arr2);
//---------------------------------------------------
let result = '';
for(let chr of 'this is string') {
    result += chr.trim();
}
console.log(result);
//--------------------------------------------------- */
class Human {
    constructor(hairColor, eyeColor) {
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
    }
}

class Person extends Human {
    constructor(hairColor, eyeColor) {
        super(hairColor, eyeColor);
        // this.name = name;
        // this.family = family;
        // this.age = age;
    }
    sayHello() {
        console.log(`волосы ${this.hairColor},глаза ${this.eyeColor}`);
    }
}

let person = new Person('brown', 'blonde');
person.sayHello();
//---------------------------------------------------
duplicate([1, 2, 3, 4, 5]);

// function duplicate(params) {
//     params.forEach(element => {
//         params.push(element); 
//     });
//     return console.log(params);
// }
function duplicate(arr) {
    let t = arr.concat(arr);
    return console.log(t);
}
var alpha = [7, 8, 9];

var alphaNumeric = alpha.push(1, [2, 3]);
console.log(alpha);