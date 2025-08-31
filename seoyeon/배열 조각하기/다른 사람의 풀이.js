const solution = (a, q, n = 0) =>
  n < q.length
    ? solution(!(n % 2) ? a.slice(0, q[n] + 1) : a.slice(q[n]), q, n + 1)
    : a.length
    ? a
    : [-1];
