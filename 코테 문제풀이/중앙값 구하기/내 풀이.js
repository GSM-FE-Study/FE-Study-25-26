function solution(array) {
  let answer = 0;
  let arr = array.sort(function (a, b) { return a - b })
  let mid = Math.floor(arr.length / 2)
  answer = arr[mid];
  return answer;
}