function solution(arr) {
  const answer = arr.reduce((a, b) => a + b) / arr.length;
  return answer;
}
