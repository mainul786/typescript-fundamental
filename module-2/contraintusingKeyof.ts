{
    // contraint using key Of 
type User = {
    name:string;
    age:number;
    clas:string;
}

type User1 =  keyof User;


   const  prop = < T, K extends keyof T>(obj:T, key:K) =>{
        return obj[key]
    }


const person = {
    name:'Najiya Islm',
    age:2,
    class:'1st'
}

const result = prop(person, 'name')

}