class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        console.log(this.size);
    }

    push(element) {
        this.items[this.size] = element;
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let removedItem = this.items[this.size - 1]
        delete this.items[this.size - 1]
        this.size -= 1;
        return removedItem
    }

    peak() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            console.log(this.items[this.size - 1]);
        }
    }

    print() {
        let str = '';
        for (let i = 0; i < this.size; i++) {
            str += this.items[i] + ' ';
        }

        console.log(str);
    }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(12);
stack.push(13);
stack.push(23);
stack.push(43);
stack.pop()

stack.peak()
stack.print();