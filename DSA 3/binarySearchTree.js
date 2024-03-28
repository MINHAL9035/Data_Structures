class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value);
            }
        }
    }

    isValidBST() {
        return this.checkBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    checkBST(root, min, max) {
        if (root === null) {
            return true;
        }

        if (root.value <= min || root.value >= max) {
            return false;
        }

        return (this.checkBST(root.left, min, root.value) && this.checkBST(root.right, root.value, max));
    }




    // DFS
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    // DFS
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    // DFS
    postOrder(root) {
        if (root) {
            this.inOrder(root.left);
            this.inOrder(root.right);
            console.log(root.value);
        }
    }

    // BFS
    levelOrder() {
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }

        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }

    closestValue(target) {
        let closestValue = this.root.value;
        let root = this.root;

        while (root) {
            if (Math.abs(target - root.value) < Math.abs(target - closestValue)) {
                closestValue = root.value;
            }

            if (target < root.value) {
                root = root.left
            } else if (target > root.value) {
                root = root.right;
            } else {
                break;
            }
        }
        return closestValue
    }
}

const bst = new BinarySearchTree();

// console.log(bst.isEmpty())
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(7)
bst.insert(3)
bst.delete(7)


console.log(bst.isValidBST());

console.log(bst.levelOrder(15));
bst.inOrder(this.root)