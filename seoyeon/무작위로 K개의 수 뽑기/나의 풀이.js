function solution(arr, k) {
  let answer = [];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      answer.push(arr[i]);
    }
    if (answer.length === k) {
      break;
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}
