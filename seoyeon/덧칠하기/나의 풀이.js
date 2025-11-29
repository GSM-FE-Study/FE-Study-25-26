function solution(n, m, section) {
  let answer = 0;
  let i = 0;

  while (i < section.length) {
    let start = section[i];
    let end = start + m - 1;
    answer++;

    while (i < section.length && section[i] <= end) {
      i++;
    }
  }

  return answer;
}
