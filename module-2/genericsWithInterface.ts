{
    // Generic with interface
    interface Developer<T>{
        name:string;
        computer:{
            brand:string;
            model:string;
            realeaseYear: number
        },
        smartWatch: T
    }


const poorDeveloper : Developer<{brand:string, model:string, display: string}> = {
name:'HP',
computer:{
    brand:'najiya',
    model:'hp-seal',
    realeaseYear:2013
},

smartWatch:{
    brand:'fistTruck',
    model:'xyo20',
    display:'34inch'
}
}

}