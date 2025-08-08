function solution(my_string, s, e) {
  var front = my_string.slice(0, s);
  var middle = my_string.slice(s, e + 1);
  var reversed = middle.split('').reverse().join('');
  var back = my_string.slice(e + 1);
  return front + reversed + back;
}
