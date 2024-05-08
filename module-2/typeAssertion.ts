// Type Assertion / type Narrowing

let anything: any;
anything = "Next Level Web Development.";
anything = 250;  

(anything as string).length;

(anything as number).toExponential(2);

const kgTogm = (value:string | number ) =>{
    if(typeof value === 'string'){
        const convertedUnit = parseInt(value) * 1000;
        console.log(convertedUnit)
    }
    if(typeof value === 'number'){
        const convertedUnit = value * 1000;
    }
    kgTogm(1000);
}
