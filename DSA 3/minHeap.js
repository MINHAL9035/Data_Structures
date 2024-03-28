class Heap {
    constructor() {
        this.data = []
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
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }

    push(value) {
        this.data.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;

        while (this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll() {
        let value = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown()
        return value;
    }

    heapifyDown() {
        let currentIndex = 0;

        while (this.data[currentIndex] > this.data[this.getLeftChildIndex(currentIndex)]) {
            let smallestIndex = this.getLeftChildIndex(currentIndex);

            if (this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
                this.data[this.getLeftChildIndex(currentIndex)] > this.data[this.getRightChildIndex(currentIndex)]) {
                smallestIndex = this.getRightChildIndex(currentIndex);
            }

            if (this.data[currentIndex] > this.data[smallestIndex]) {
                this.swap(currentIndex, smallestIndex);
                currentIndex = smallestIndex;
            }

        }
    }

}

const heap = new Heap();

// heap.push(25)
// heap.push(5)
// heap.push(40)
// heap.push(70)
// heap.push(90)
// heap.push(44)

heap.push(10);
heap.push(20);
heap.push(4)
heap.push(14)
heap.push(6)
heap.push(7)
heap.push(17)
heap.push(3)


console.log(heap.data);
// heap.poll();
// console.log(heap.data);
// heap.poll();
// console.log(heap.data);
// heap.poll();
// console.log(heap.data);

