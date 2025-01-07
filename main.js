import graph from "./graph.js";

const test = graph();

function knightMoves(start, end) {
  const board = test;
  const q = [{ pos: start, visited: [start] }];
  while (q[0]) {
    const currentSquare = q.shift();
    if (currentSquare.pos[0] == end[0] && currentSquare.pos[1] == end[1])
      return currentSquare.visited;
    board[currentSquare.pos[0]][currentSquare.pos[1]].traverse((square) => {
      if (
        !currentSquare.visited.some(
          (visit) => visit[0] == square && visit[1] == square
        )
      ) {
        q.push({
          pos: square,
          visited: currentSquare.visited.concat([square]),
        });
      }
    });
  }
}

console.log(knightMoves([0, 0], [3, 3]));
