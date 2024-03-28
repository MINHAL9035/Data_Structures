// const set = new Set([1, 2, 3])

// set.add(7)
// console.log(set.has(5))
// set.delete(3)

// set.clear()
// console.log('iam size', set.size)
// for (const sets of set) {

//     console.log(sets)

// }

function string(str, n) {

    let charCode = []
    let res = []

    for (let i = 0; i < str.length; i++) {
        charCode.push(str[i].charCodeAt() + n)
    }
    console.log(charCode)

    for (let j = 0; j < charCode.length; j++) {
        res.push(String.fromCharCode(charCode[j]))
    }
    console.log(res.join(''))
}


string('minhal', 2)
