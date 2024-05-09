{
    // inheritance 
    class Person {
        name:string;
        age:number;
        address:string;
        constructor(name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(hours:number){
            console.log(`${this.name} is slppeing ${hours}`)
        }

    }

    class Teacher extends Person {

        designation:string;
        constructor(name:string, age:number, address:string, designation:string){
            super(name, age, address)
            this.designation = designation;
        }

        getSleep(hours:number){
            console.log(`${this.name} is slppeing ${hours}`)
        }

    }
    const teacher1 = new Teacher('sona', 30, 'Charlabangola', 'Professor');
    
   

    class Studnet extends Person{
       
        constructor(name:string, age:number, address:string){
            super(name, age, address)
        }

        getSleep(hours:number){
            console.log(`${this.name} is slppeing ${hours}`)
        }
    }
    const student1 = new Studnet('Najiya', 2, 'Charlabangola');
   
}