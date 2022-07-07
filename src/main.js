function checkArray(a = 'Error', b, ...rest) {
    const map = new Map;
    (arguments.length < 5) ? console.log("Error") : console.log(`${a} - ${b} - ${rest[0]}`)

    const args = Array.from(arguments).slice(3);
    args.forEach((item) => {
        const index = args.indexOf(item)
        map.set(index, item)
    })
    console.log(Object.fromEntries(map))
}

checkArray(undefined,2,3,4,5,'sd')