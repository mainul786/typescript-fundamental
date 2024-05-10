{
    // Polymorphisom
    class Person{
        getSleep(){
            console.log(`every day sleep in 8 hour in a day`)
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`everyday sleep in 6 hour per day`)
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log(`every day 4 hour in a day`)
        }
    }

    const person = new Person();
    person.getSleep();
    const person1 = new Student();
    person1.getSleep();
    const person2 = new Developer();
    person2.getSleep();
}