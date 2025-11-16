function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
// Math.sqrt 제곱근 구하는 함수
// Number.isInteger 정수인지 아닌지 판별
