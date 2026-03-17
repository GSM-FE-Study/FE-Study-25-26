function solution(my_string) {
  var answer = "";
  let arr = Array.from(my_string);
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "a" &&
      arr[i] !== "e" &&
      arr[i] !== "i" &&
      arr[i] !== "o" &&
      arr[i] !== "u"
    ) {
      answer += arr[i];
    }
  }
  return answer;
}
