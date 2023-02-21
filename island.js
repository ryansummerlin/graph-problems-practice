function getNeighbors(row, col, graph) {
  let neighbors = [];

  const nonZero = function(row, col, graph) {
    if (graph[row][col] === 1) {
      neighbors.push([row, col]);
    }
  }

  // Check top
  if (row > 0) {
    nonZero(row - 1, col, graph);
  }
  // Check bottom
  if (row < graph.length - 1) {
    nonZero(row + 1, col, graph);
  }
  // Check left
  if (col > 0) {
    nonZero(row, col - 1, graph);
  }
  // Check right
  if (col < graph[0].length - 1) {
    nonZero(row, col + 1, graph);
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add([row, col].join(','));
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length !== 0) {
    // Pop the first node
    currentNode = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor.join(','))) {
        visited.add(neighbor.join(','));
        stack.push(neighbor);
      }
    });
  }
  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];
