function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    let char = control[i];

    if (char === 'w') {
      n += 1;
    } else if (char === 's') {
      n -= 1;
    } else if (char === 'd') {
      n += 10;
    } else if (char === 'a') {
      n -= 10;
    }
  }

  return n;
}

console.log(solution(0, 'wsdawsdassw'));
