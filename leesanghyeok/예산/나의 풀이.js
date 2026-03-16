function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b).forEach((x) => {
    if (x <= budget) {
      answer++;
      budget -= x;
    }
  });
  return answer;
}
