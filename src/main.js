let checkArray = (a = 'Error', b, ...rest) => {
    const arr = [a,b, ...rest];
    (arr.length < 5) ? console.log("Error") : console.log(`${a} - ${b} - ${rest[0]}`)

    const args = arr.slice(3);
    console.log({...args})
}

checkArray(undefined,2,3,4,5,'sd')

