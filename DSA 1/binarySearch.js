function binary(arr, target) {
    if (arr.length < 1) {
        return 'array not found';
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1;
}

console.log(binary([2, 2, 3, 3, 32, 43, 65, 332, 432, 445], 2));

