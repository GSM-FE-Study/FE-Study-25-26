function solution(a, b) {
  const calculate = Number(String(a) + String(b));
  const prod = 2 * a * b;
  return calculate >= prod ? calculate : prod;
}
