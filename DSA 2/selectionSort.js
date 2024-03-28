function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array;
}

let array = [12,10,100,90,150,-40,-70,1.5];
let sortedArray = selectionSort(array)
console.log(sortedArray);
