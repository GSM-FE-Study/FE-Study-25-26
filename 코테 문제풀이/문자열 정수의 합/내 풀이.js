function solution(num_str) {
  var answer = 0;
  const numbers = Array.from(num_str, Number);
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer;
}
