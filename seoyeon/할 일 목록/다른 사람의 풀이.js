function solution(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}
