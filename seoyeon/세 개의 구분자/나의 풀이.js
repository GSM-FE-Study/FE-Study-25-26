function solution(myStr) {
  var answer = [];
  var temp = '';

  for (var i = 0; i < myStr.length; i++) {
    var ch = myStr[i];
    if (ch === 'a' || ch === 'b' || ch === 'c') {
      if (temp.length > 0) {
        answer.push(temp);
        temp = '';
      }
    } else {
      temp += ch;
    }
  }

  if (temp.length > 0) {
    answer.push(temp);
  }

  if (answer.length === 0) {
    return ['EMPTY'];
  }

  return answer;
}
