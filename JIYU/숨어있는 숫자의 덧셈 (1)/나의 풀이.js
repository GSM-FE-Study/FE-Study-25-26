function solution(my_string) {
  let arr = my_string.replace(/[^0-9]/g, "").split("");
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  return answer;
}
