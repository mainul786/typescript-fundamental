{
    // class declaretion

    class Animal{
        name:string;
        pecees:string;
        sound:string;
        constructor(name:string, pecees:string, sound:string){
            this.name = name;
            this.pecees = pecees;
            this.sound = sound
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('Germany Dog', 'Dog', 'ghew ghew');
    dog.makeSound()
}