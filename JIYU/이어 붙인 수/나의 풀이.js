function solution(num_list) {
  let answer = [];
  let result = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 != 0) answer.push(num_list[i]);
    else result.push(num_list[i]);
  }
  return Number(answer.join("")) + Number(result.join(""));
}
