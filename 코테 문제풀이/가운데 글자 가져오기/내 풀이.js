function solution(s) {
  let answer = "";
  const a = s.length;
  const b = Math.floor(a / 2);
  if (a % 2 === 0) {
    answer = s.slice(b - 1, b + 1);
  } else {
    answer = s.charAt(b);
  }
  return answer;
}
