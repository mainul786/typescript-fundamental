"use strict";
// Function declare in typescript
Object.defineProperty(exports, "__esModule", { value: true });
// normal function
function add(num1, num2 = 20) {
    return num1 + num2;
}
add(10);
// arrow function 
const addNumber = (num1, num2) => num1 + num2;
// Object use function method
const poorUser = {
    name: 'Najiya',
    blance: 0,
    addBlance(blance) {
        return this.blance + blance;
    }
};
// array using map get result all element add
const arr = [1, 4, 9, 8, 6, 7];
const newArr = arr.map((el) => el + el);
