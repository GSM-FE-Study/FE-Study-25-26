function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  while (score.length >= m) {
    const box = score.splice(0, m);
    const min = box[box.length - 1];
    answer += min * m;
  }

  return answer;
}
