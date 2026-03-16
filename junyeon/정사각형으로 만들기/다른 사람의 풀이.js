function solution(arr) {
  let n = Math.max(arr.length, Math.max(...arr.map((v) => v.length)));
  for (let a of arr) while (a.length < n) a.push(0);
  while (arr.length < n) arr.push(Array(n).fill(0));
  return arr;
}
