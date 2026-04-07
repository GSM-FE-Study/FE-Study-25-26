// 배열을 사용해서 풀었습니당
function solution(s) {
  const answer = [];
  const lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (lastIndex[ch] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - lastIndex[ch]);
    }
    lastIndex[ch] = i;
  }

  return answer;
}
