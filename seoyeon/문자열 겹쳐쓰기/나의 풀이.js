function solution(my_string, overwrite_string, s) {
  const myLength = my_string.length;
  const overLength = overwrite_string.length;

  let front = '';
  for (let i = 0; i < s; i++) {
    front += my_string[i];
  }

  let middle = '';
  for (let i = 0; i < overLength; i++) {
    middle += overwrite_string[i];
  }

  let back = '';
  for (let i = s + overLength; i < myLength; i++) {
    back += my_string[i];
  }

  let result = front + middle + back;

  return result;
}
