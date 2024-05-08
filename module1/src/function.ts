// Function declare in typescript

// normal function
function add(num1: number, num2: number = 20 ):number {
    return num1 + num2;
}
add(10);

// arrow function 
const addNumber = (num1: number, num2: number) : number => num1 + num2;

// Object use function method
const poorUser = {
    name: 'Najiya',
    blance:0,
    addBlance(blance : number){
        return this.blance + blance
    }
}

// array using map get result all element add
const arr: number[] = [1, 4, 9, 8, 6, 7];
const newArr: number[] = arr.map((el:number):number => el + el)