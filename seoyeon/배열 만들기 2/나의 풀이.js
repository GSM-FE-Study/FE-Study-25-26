function solution(l, r) {
  let result = [];

  function generate(num) {
    if (num > r) return;
    if (num >= l) result.push(num);

    generate(num * 10);
    generate(num * 10 + 5);
  }

  generate(5);

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);
}
