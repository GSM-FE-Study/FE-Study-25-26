function solution(arr) {
  var answer = [];
  if (arr.length === 1) return [-1];
  const min = Math.min(...arr);
  answer = arr.filter((arr) => arr !== min);
  return answer;
}
