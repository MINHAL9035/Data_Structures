function quickSort(array) {
    while (array.length < 2) {
        return array
    }
    let pivot = array[0];
    let leftArray = [];
    let rightArray = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

let array = [12, 10, 100, 90, 150, -40, -70, 1.5];
let sortedArray = quickSort(array)
console.log(sortedArray);

