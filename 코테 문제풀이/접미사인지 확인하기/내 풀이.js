function solution(my_string, is_suffix) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.slice(i, my_string.length) === is_suffix) {
      answer = 1;
    }
  }
  return answer == 1 ? 1 : 0;
}
