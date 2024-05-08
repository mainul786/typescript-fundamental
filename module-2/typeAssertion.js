"use strict";
// Type Assertion / type Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Next Level Web Development.";
anything = 250;
anything.length;
anything.toExponential(2);
const kgTogm = (value) => {
    if (typeof value === 'string') {
        const convertedUnit = parseInt(value) * 1000;
        console.log(convertedUnit);
    }
    if (typeof value === 'number') {
        const convertedUnit = value * 1000;
    }
    kgTogm(1000);
};
