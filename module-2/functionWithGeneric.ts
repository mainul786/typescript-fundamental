const createArray = (param:string) : string[] =>{
    return [param];
}

const createArrayWithGeneric = <T>(param:T):T[] =>{
    return [param]
}

const res1 = createArray('India');
const resGeneric = createArrayWithGeneric<string>('India');

const resGenericObj = createArrayWithGeneric<{id:number, name:string}>({id:220, name:'Najiya isalm'}) 