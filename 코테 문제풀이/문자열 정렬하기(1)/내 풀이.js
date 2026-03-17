function solution(my_string) {
    let answer = [];

  for (let i = 0; i < my_string.length; i++) {
    let ch = my_string[i];
    if (ch.charCodeAt() < 58) {
      answer.push(Number(ch));
    }
  }

  return answer.sort((a, b) => a - b);
}