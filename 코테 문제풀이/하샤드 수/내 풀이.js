function solution(x) {
  const num = String(x).split("").map(Number);
  const sum = num.reduce((acc, cur) => acc + cur, 0);

  return x % sum === 0;
}
