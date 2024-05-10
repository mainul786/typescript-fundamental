{
    // type guard
    const add = (param1:string | number, param2:string | number ) :string|number =>{
        if(typeof param1 === "number" && param2 === "number"){
            return param1 + param2
        } else{
            return param1.toString() + param2.toString();

        }

    }
    const result = add(2, 3);
    console.log(result);
    const result1 = add('3', '26');
    console.log(result1);
}