{
    // Nullable type
const searchName = (value: string | null) =>{
    if(value){
        console.log("YOU got searchng")
    }else {
        console.log('dont get by searching')
    }
}
searchName('mainul Islam');
searchName(null);

// unknown  typeof
const getSpeedInMeterPerSecond = (values: unknown) =>{
    if(typeof values === 'number'){
        const convertedValue = (values * 1000) / 3600;
        console.log(`we convert value ${convertedValue}`)
    } else if(typeof values === 'string'){
        const getValue = values.split(' ');
        const [result, unit] = getValue;
        const convertedValue = (parseInt(result) * 1000 / 3600)
        console.log(convertedValue)
    } else{
        console.log('worng input')
    }
}
getSpeedInMeterPerSecond('1000 km^1h')


// never 
const throwError = (msg:string):never =>{
throw new Error(msg)
}
throwError('something went is wrong')
}