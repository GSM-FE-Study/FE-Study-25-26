function solution(strArr) {
  var answer = [];

  for (var i = 0; i < strArr.length; i++) {
    var current = strArr[i];
    if (i % 2 === 0) {
      answer.push(current.toLowerCase());
    } else {
      answer.push(current.toUpperCase());
    }
  }

  return answer;
}
