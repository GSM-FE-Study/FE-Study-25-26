function solution(n) {
  let answer = 0;

  let x = 1;

  while (x <= n) {
    x = x + 1;

    let mod = n % x;

    if (mod === 1) {
      answer = x;
      break;
    }
  }

  return answer;
}
