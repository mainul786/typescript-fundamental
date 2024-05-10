{
    // Example of Getter and Setter

    class Person {
       public id: number;
      public  name: string;
        private _blance: number;
        constructor( id: number,  name: string,  _blance: number) {
            this.id = id;
            this.name = name;
            this._blance = _blance;
        }

        set amount(amount:number){
            this._blance =this._blance + amount;
        }

        get totalBlance() {
            return this._blance
        }
    }

    const person = new Person(121, 'najiya islam', 200);
    console.log(person);
    person.amount = 500;
    const totalBlance = person.totalBlance
    console.log(totalBlance);

}