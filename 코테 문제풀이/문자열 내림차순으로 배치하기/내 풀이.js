function solution(s) {
  var answer = "";
  let arr = s.split("");
  answer = arr.sort((a, b) => (a < b ? 1 : -1));
  answer = answer.join("");
  return answer;
}
