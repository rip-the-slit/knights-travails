import LinkedList from "./linkedlist-class.js";

export default function graph() {
  const board = [];
  for (let i = 0; i <= 7; i++) {
    board[i] = [];
    for (let j = 0; j <= 7; j++) {
      board[i][j] = new LinkedList();
      const add = (k, l) =>
        i + k >= 0 && 7 >= i + k && j + l >= 0 && 7 >= j + l
          ? board[i][j].append([i + k, j + l])
          : undefined;
      for (let k = 1, l = 2; k <= 2 && l >= 1; k++ && l--) {
        add(k, -l);
        add(k, l);
        add(-k, l);
        add(-k, -l);
      }
    }
  }
  return board;
}
