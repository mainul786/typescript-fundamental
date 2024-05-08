{
    //mapped type

    type myReadOnly<T>={
        readonly [P in keyof T] : T[P];
    };

    interface Person{
        name:string;
        age:number;
    }

    type ReadOnlyPerson = myReadOnly<Person>;
    const person: ReadOnlyPerson = {name:'Najiya Islam', age:2}
    console.log(person);


    type MyPartial<T> = {
        [P in keyof T]? : T[P];
    };



    type PartialPerson = Partial<Person>
    type PartialPersons = MyPartial<Person>
    const result: PartialPerson = {name:'sonamuni'};
    const result1: PartialPersons = {name:'sonamuni', age:34};
    console.log(result);
    console.log(result1);

}