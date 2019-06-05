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
function Person(name) {
    this.name = name;

    this.sayHello = function() {
        (() => {
            console.log(`hello ${this.name}`);
        })();
        

    };
}
let person = new Person('Vasy');
person.sayHello();