function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}
