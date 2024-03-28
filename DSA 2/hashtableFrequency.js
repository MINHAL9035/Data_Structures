function highestFrequent(arr) {
    let hash = {};
    let maxFrequency = 0;


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (hash[element]) {
            hash[element]++
        } else {
            hash[element] = 1
        }

        if (hash[element] > maxFrequency) {
            maxFrequency = hash[element];
        }
    }

    return maxFrequency;
}
let arr = [1, 1, 1, 1, 2, 3, 3, 2, 2, 1]
let frequent = highestFrequent(arr);
console.log(frequent);

