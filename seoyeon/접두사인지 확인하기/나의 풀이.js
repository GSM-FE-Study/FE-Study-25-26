function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) {
    return 0;
  }
  let prefix = '';
  for (let i = 0; i < is_prefix.length; i++) {
    prefix += my_string[i];
  }
  if (prefix === is_prefix) {
    return 1;
  } else {
    return 0;
  }
}
