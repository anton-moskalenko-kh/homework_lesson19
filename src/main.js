function checkArray(...[arr]) {
    const map = new Map();

    if (arr.length < 5) {
        console.log('Error')
    }
    if (arr[0] === undefined) {
        arr[0] = 'Error'
    }

    const str = arr.slice(0,3).join('-')
    console.log(str)

    const newArr = arr.slice(3).forEach((item) => {
        const index = arr.indexOf(item)
        map.set(index, item)
    });

    const obj = Object.fromEntries(map)
    console.log(obj)
}

const data = [undefined,2,3,4,5,'sd']

checkArray(data)