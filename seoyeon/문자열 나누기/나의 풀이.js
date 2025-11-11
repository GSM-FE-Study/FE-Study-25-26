function solution(s) {
  let answer = 0;
  let first = s[0];
  let same = 0;
  let diff = 0;

  for (let i = 0; i < s.length; i++) {
    if (!first) {
      first = s[i];
      same = 0;
      diff = 0;
    }

    if (s[i] === first) same++;
    else diff++;

    if (same === diff) {
      answer++;
      first = null;
    }
  }

  if (first !== null) answer++;

  return answer;
}
