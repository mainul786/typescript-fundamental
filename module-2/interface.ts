{
// interface declare

    interface User{
        name:string;
        age:number;
    }

    
 // i want to extend a object proper thow interfae

    interface UserExte extends User {
        roll: string
    }
    
    const exten : UserExte ={
        name:'najiya',
        age: 20,
        roll:'admin'
    }

    const user : User = {
        name:'najiya',
        age: 2,
    }

// interface and type declare 
type roll1 = number[];

interface roll2{
    [index:number] :number;
}
    
const rollNumber : roll2 =[1, 2, 3];

// type alias and interface function declare
type Add = (num1:number, num2:number)=>number;

interface Add1{
    (num1:number, num2:number):number
}
const add: Add = (num1, num2) => num1 + num2;
   

   
    
}