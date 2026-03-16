function solution(t, p) {
  let answer = 0;
  const pNum = Number(p);
  const len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    const subStr = t.slice(i, i + len);
    const subNum = Number(subStr);
    if (subNum <= pNum) {
      answer++;
    }
  }

  return answer;
}
