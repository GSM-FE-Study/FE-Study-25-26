function solution(food) {
  let answer = '';
  let left = '';
  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);
    let part = String(i).repeat(count);
    left += part;
  }
  let right = left.split('').reverse().join('');
  answer = left + '0' + right;
  return answer;
}
