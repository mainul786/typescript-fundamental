{
    // conditional type 
    // type a1 = null;
    type a1 = number;
    // type b1 = undefined;
    type b1 = string;

    type result = a1 extends null ? true : false;

    type result1 = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type dubaiShaikh = {
        bike: string;
        car: string;
        ship: string
    }


    type checkVehicale<T> =  T extends keyof dubaiShaikh ? true : false;

    type hasCar = checkVehicale<'car'>
}