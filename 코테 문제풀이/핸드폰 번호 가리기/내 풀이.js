function solution(phone_number) {
  var answer = "";
  let num = phone_number.slice(0, phone_number.length - 4);
  for (let i = 0; i < num.length; i++) {
    answer += "*";
  }
  return answer + phone_number.slice(-4);
}
