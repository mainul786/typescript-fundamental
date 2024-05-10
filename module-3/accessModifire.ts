{
    // access modifire there are three types ---> 1. public, 2.private, 3.protected modifire, public modifire by-default

    class Person{
        protected ssn: string;
        private firstName: string;
        private lastName:string;

        constructor(ssn:string, firstName:string, lastName:string){
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

      private  getFullname():string {
            return `${this.firstName} ${this.lastName}`
        }

    }

    class ProtectClass extends Person {
        constructor(ssn:string, firstName:string, lastName:string){
            super(ssn, firstName, lastName)
        }
    }

    const protec = new ProtectClass('111', 'najiya', 'islam');
    console.log(protec);
    
    const person = new Person('121','mainul', 'Islam');
    // console.log(person.ssn); //error for private modifire
    console.log(person);
}