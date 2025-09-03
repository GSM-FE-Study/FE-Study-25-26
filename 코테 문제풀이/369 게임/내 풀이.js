function solution(order) {
  let answer = 0;
  const str = String(order);
  const num = Array.from(str);

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "3" || num[i] === "6" || num[i] === "9") {
      answer++;
    }
  }
  return answer;
}
