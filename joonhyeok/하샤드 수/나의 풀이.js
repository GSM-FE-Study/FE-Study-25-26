function solution(x) {
  y = x.toString();
  y = y.split("");
  y = y.reduce((a, b) => Number(a) + Number(b));
  return !Boolean(x % y);
}
