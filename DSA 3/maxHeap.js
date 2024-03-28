class MaxHeap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(value) {
        this.data[this.data.length] = value;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll() {
        let value = this.data[0]
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();
        return value;
    }

    heapifyDown() {
        let currentIndex = 0;

        while (this.data[currentIndex] < this.data[this.getLeftChildIndex(currentIndex)]) {
            let biggestIndex = this.getLeftChildIndex(currentIndex);

            if (this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
                this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {

                biggestIndex = this.getRightChildIndex(currentIndex);

            }

            if (this.data[currentIndex] < this.data[biggestIndex]) {
                this.swap(currentIndex, biggestIndex);
                currentIndex = biggestIndex;
            } else {
                return;
            }

        }
    }


}

function heapSort(array) {
    const heap1 = new MaxHeap();
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        heap1.push(array[i]);
    }

    for (let i = 0; i < array.length; i++) {
        sortedArray.unshift(heap1.poll());
    }

    return sortedArray
}

const heap = new MaxHeap();

heap.push(10);
heap.push(20);
heap.push(4)
heap.push(14)
heap.push(6)
heap.push(7)
heap.push(17)
heap.push(3)

console.log(heap.data);
console.log(heap.poll(),
    heap.poll(),
    heap.poll(),
    heap.poll(),
    heap.poll(),
    heap.poll(),
    heap.poll(),
    heap.poll());
console.log(heap.data);

// let array = [12,34,55,62,12,34,44,-1,223,5,-3,5]
// let sorted = heapSort(array)
// console.log(sorted);