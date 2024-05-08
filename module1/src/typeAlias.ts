{
// type alias

type Student = {
    name:string;
    age:number;
    gender:string;
    contact?:string
}


const student : Student = {
    name: 'najiya',
    age:20,
    gender:'female'

}
const studen1 : Student = {
    name: 'najiya',
    age:20,
    gender:'female'

}
const student2 : Student = {
    name: 'najiya',
    age:20,
    gender:'female'

}

// string  type alias

type UserName =  string;
const username : UserName = 'suhana';

//boolean type alias 

type IsAdmin = boolean;
const isadmin : IsAdmin = true;

// Function type alias

type Add = (num1: number, num2:number) =>number;

const add: Add = (num1, num2) => num1 + num2;

}