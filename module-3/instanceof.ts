{
    //Explain in instance of 
    class Animal{
        name:string;
        space:string;
        constructor(name:string, space:string){
            this.name = name;
            this.space = space;
        }

        makeSound(){
            console.log(`You can make sound`);
        }
    }

    class Dog extends Animal{
        constructor(name, space){
            super(name, space)
        }
        dogBarke(){
            console.log('Dog Barking Ghew Ghew!')
        }
    }

    class Cat extends Animal {
        constructor(name, space){
            super(name, space)
        }
        catBark(){
            console.log(`cat is barking mew mew!`);
        }
    }

const isDog = (animal: Animal): animal is Dog =>{
return animal instanceof Dog;
}
const isCat = (animal: Animal) : animal is Cat =>{
    return animal instanceof Cat;
}

const getAnimal = (animal : Animal) =>{
if(isDog(animal)){
animal.dogBarke();
}else if(isCat(animal)){
    animal.catBark();
}else{
    animal.makeSound()
}
}

    const dog = new Dog('Belati', 'sometime enjoy!');
    const cat = new Cat('Amar Rasul Valobasten', 'amio valobasi');
    console.log(dog)
    console.log(cat)
    getAnimal(cat);
}