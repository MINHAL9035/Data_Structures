function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > numberToInsert; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = numberToInsert;
    }
    
    return array;
}

console.log(insertionSort([12, 10, 100, 90, 150, -40, -70, 1.5]));
