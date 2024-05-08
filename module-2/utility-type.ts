{
    //utility type 
    //Pick type syntax--- type newType = Pick<Type, key>

    // example-1
    interface Person {
        name:string;
        age:number;
        gender:string;
        address:string;
    }

    type PersonDetails = Pick<Person, 'name' | 'gender'>
    const person:PersonDetails = {name:'najiya isalm',gender:'female' }

    // console.log(person)

    // Omit type syntax---> type NewType = Omit<OriginalType, Key1 | key2>

    // Example of Omit

    type PersionDetailsOmit = Omit<Person, 'address'>;
    const personOmit : PersionDetailsOmit = {name:'najiya sona', age:20, gender:'female'};
    // console.log(personOmit);


    // Required Type:

    interface Friend {
        name:string;
        age:number;
        salary:number;
    }

    type FreiendRequired = Required<Friend>
    const friendDetails:FreiendRequired = {name:'sona', age:30, salary:3500};
    console.log(friendDetails)

    // Record Type

    // type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {}
    type MyObj = Record<string, unknown>

    const obj1: MyObj = {
        a:'bc',
        b:'bd',
        c:8
    }
}