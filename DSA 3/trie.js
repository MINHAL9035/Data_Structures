class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                curr.children[word[i]] = new Node()
            }
            curr = curr.children[word[i]]
        }
        curr.isEndOfWord = true;
    }

    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return false;
            }
            curr = curr.children[word[i]]
        }
        return curr.isEndOfWord;
    }


    //  // Returns an array of words in the trie that start with the given prefix.
    //  suggest(prefix) {
    //     let currentNode = this.root;
    //     for (let i = 0; i < prefix.length; i++) {
    //         const char = prefix[i];
    //         if (!(char in currentNode.children)) {
    //             return []; // No words with this prefix
    //         }
    //         currentNode = currentNode.children[char];
    //     }

    //     // At this point, currentNode represents the node corresponding to the prefix
    //     // Now, perform a depth-first search to find all words starting from this node
    //     const suggestions = [];
    //     this._dfs(currentNode, prefix, suggestions);
    //     return suggestions;
    // }

    // _dfs(node, prefix, suggestions) {
    //     if (node.isEndOfWord) {
    //         suggestions.push(prefix);
    //     }

    //     for (const char in node.children) {
    //         this._dfs(node.children[char], prefix + char, suggestions);
    //     }
    // }

    searchPrefix(word) {
        let curr = this.root;
        let words = []
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return word;
            }
            curr = curr.children[word[i]];
        }
        this.searchHelper(curr, word, words);
        return words;
    }

    searchHelper(root, word, words) {
        if (root.isEndOfWord) {
            words.push(word);
        }

        for (let child in root.children) {
            this.searchHelper(root.children[child], word + child, words);
        }
    }

    delete(word) {
        this.deleteNode(this.root, word, 0);
    }

    deleteNode(root, word, index) {
        if (!root) {
            return false;
        }

        if (index === word.length) {
            if (!root.isEndOfWord) {
                return false;
            }
            root.isEndOfWord = false;
            return Object.keys(root.children).length === 0;
        }
        let char = word[index]
        if (this.deleteNode(root.children[char], word, index + 1)) {
            delete root.children[char];
            return Object.keys(root.children).length === 0
        }
    }




}

let trie = new Trie();

trie.insert("rithas");
trie.insert("riyas")
trie.insert("rich")
trie.insert("ri")
trie.insert("rthasa")
console.log(trie.search("riyas"));
trie.delete("ri")
console.log(trie.searchPrefix("ri"));