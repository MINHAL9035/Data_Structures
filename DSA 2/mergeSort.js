function mergedSort(array) {
    if (array.length < 2) {
        return array;
    }
    let mid = array.length / 2;
    let leftArray = array.slice(0, mid)
    let rightArray = array.slice(mid);
    return join(mergedSort(leftArray), mergedSort(rightArray));
}

function join(leftArray, rightArray) {
    let newArray = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < leftArray.length) {
        if (leftArray[i] < rightArray[j]) {
            newArray.push(leftArray[i++]);
        } else {
            newArray.push(rightArray[j++]);
        }
    }

    while (i < leftArray.length) {
        newArray.push(leftArray[i++]);
    }

    while (j < rightArray.length) {
        newArray.push(rightArray[j++]);
    }

    return newArray;
}

let array = [12, 10, 100, 90, 150, -40, -70, 1.5];
let sortedArray = mergedSort(array)
console.log(sortedArray);
