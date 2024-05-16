class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0 // Corrected the initialization
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
        } else if (index === this.size) {
            this.append(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index === 0) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
            }
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            prev.next = prev.next.next
            if (prev.next === null) {
                this.tail = prev
            }
        }
        this.size--
    }

    removeFromValue(value) {
        if (this.head.value === value) {
            this.removeFrom(0)
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                prev.next = prev.next.next
                if (prev.next === null) {
                    this.tail = prev
                }
                this.size--
            }
        }
    }
    removeFromFront() {
        if (this.isEmpty()) {
            console.log('list is empty');
            return null
        }

        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value

    }


    removeFromEnd() {
        if (this.isEmpty()) {
            console.log('list is empty man');
            return null
        }

        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev

        }
        this.size--
        return value

    }

    search(value) {
        let curr = this.head
        let i = 0
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        this.tail = this.head // Update the tail to the current head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.append(90)
linkedList.append(80)
linkedList.insert(2, 70)
console.log(linkedList.search(70))
linkedList.reverse()
linkedList.print()


