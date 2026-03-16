function solution(arr, queries) {
  var answer = [];

  for (let q of queries) {
    let [s, e, k] = q;
    let minVal = Infinity;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minVal) {
        minVal = arr[i];
      }
    }

    if (minVal === Infinity) {
      answer.push(-1);
    } else {
      answer.push(minVal);
    }
  }

  return answer;
}
