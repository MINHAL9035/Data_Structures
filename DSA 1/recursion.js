function binary(arr, target) {
    arr.sort((a, b) => a - b);

    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (rightIndex < leftIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

console.log(binary([1, 44, 33, 23, 355, 644, 33, 533, 53577, 7], 23));

function factorial(n) {
    //base case

    if (n < 2) {
        return 1
    } else {
        return n * factorial(n - 1)
    }

}

console.log(factorial(6))





function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

}

console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))