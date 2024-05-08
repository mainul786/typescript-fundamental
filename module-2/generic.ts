{
    // dynamicaly generic type

type GenericArray<T> = Array<T>;

const rollNumber:GenericArray<number>=[1,2, 3,4,5];

const mentors: GenericArray<string> = ['najiya', 'sona'];

const boolArray: GenericArray<boolean> = [true, false, true];

// array of object using generic

const user : GenericArray<{name:string, age:number}> = [
    {
        name:'najiya',
        age:2
    },
    {
        name:'sona',
        age:29
    }
];

// Generic using Tuple

type GenericTuple<x, y> = [x, y];

// example-1
const user2:GenericTuple<string, string> = ['najiya', 'sona'];

// example-2
const user3:GenericTuple<number, {name:string, email:string}> = [
123,
{
    name:'najiya',
    email:'a@gmail.com'
},
{
    name:'sona',
    email:'sona@gmail.com'
}
];
}