{
    // class declaretion

    // class Animal{
    //     name:string;
    //     pecees:string;
    //     sound:string;
    //     constructor(name:string, pecees:string, sound:string){
    //         this.name = name;
    //         this.pecees = pecees;
    //         this.sound = sound
    //     }
    //     makeSound(){
    //         console.log(`The ${this.name} says ${this.sound}`)
    //     }
    // }
// perfect process to declare class
    class Animal{
       
        constructor(public name:string, public pecees:string, public sound:string){
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('Germany Dog', 'Dog', 'ghew ghew');
    dog.makeSound();


}