class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }


    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    vertices() {
        let s = Object.keys(this.adjacencyList)
        console.log(s);
    }

    BFS(startingVertex) {
        let visited = {};
        let queue = [];

        visited[startingVertex] = true;
        queue.push(startingVertex);

        while (queue.length > 0) {
            const vertex = queue[0];
            console.log(vertex);
            queue.shift();

            this.adj[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }


        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                console.log(vertex);
                visited[vertex] = true;

            }
        }
    }
    BFS(startingVertex) {
        let visited = {};
        let queue = [];

        visited[startingVertex] = true;
        queue.push(startingVertex);

        while (queue.length > 0) {
            const vertex = queue[0];
            console.log(vertex);
            queue.shift();

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }


        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                console.log(vertex);
                visited[vertex] = true;

            }
        }
    }


    dfs(startingVertex) {
        let allValues = new Set(Object.keys(this.adjacencyList));
        let visited = {};

        for (let vertex of allValues) {
            visited[vertex] = false;
        }

        const dfsHelper = (vertex) => {
            visited[vertex] = true;
            console.log(vertex);
            allValues.delete(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor)
                }
            }
        }

        dfsHelper(startingVertex);

        for (let vertex of allValues) {
            if (!visited[vertex]) {
                dfsHelper(vertex);
            }
        }
    }





    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1));
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " => " + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph();

graph.addVertex(35)
graph.addVertex(10)
graph.addVertex(30)
graph.addVertex(60);
graph.addVertex(5);
graph.addVertex(20);


graph.addEdge(35, 10)
graph.addEdge(30, 10)
graph.addEdge(35, 30);
graph.addEdge(5, 20);
graph.dfs(10)


