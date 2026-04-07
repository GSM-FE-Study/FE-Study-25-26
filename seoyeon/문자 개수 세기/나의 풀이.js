function solution(my_string) {
  var answer = new Array(52).fill(0);
  for (var i = 0; i < my_string.length; i++) {
    var ch = my_string[i];
    var code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      var index = code - 65;
      answer[index]++;
    } else if (code >= 97 && code <= 122) {
      var index = code - 97 + 26;
      answer[index]++;
    }
  }
  return answer;
}
