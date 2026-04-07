function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num >= 50 && num % 2 === 0) {
      answer.push(num / 2);
    } else if (num < 50 && num % 2 === 1) {
      answer.push(num * 2);
    } else {
      answer.push(num);
    }
  }
  return answer;
}
