function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);

    return array; 
}

let array = [12,10,100,90,150,-40,-70,1.5];
let sortedArray = bubbleSort(array)
console.log(sortedArray);



































