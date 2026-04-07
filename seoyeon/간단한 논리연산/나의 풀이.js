function solution(x1, x2, x3, x4) {
  let firstOr = x1 || x2;
  let secondOr = x3 || x4;
  let answer = firstOr && secondOr;
  return answer;
}
