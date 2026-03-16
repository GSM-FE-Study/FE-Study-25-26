function solution(d, budget) {
  let count = 0;
  d = d.sort((a, b) => a - b);
  d.reduce((sum, cur) => {
    if (sum + cur <= budget) {
      count++;
      return sum + cur;
    }
    return sum;
  }, 0);

  return count;
}
