function solution(rank, attendance) {
  const candidates = [];

  for (let i = 0; i < rank.length; i += 1) {
    if (attendance[i]) candidates.push([rank[i], i]);
  }

  candidates.sort((a, b) => a[0] - b[0]);
  const a = candidates[0][1];
  const b = candidates[1][1];
  const c = candidates[2][1];
  return 10000 * a + 100 * b + c;
}
