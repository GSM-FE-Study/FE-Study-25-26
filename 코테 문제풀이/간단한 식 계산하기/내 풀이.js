function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  const front = Number(a);
  const back = Number(b);

  if (op === "+") {
    return front + back;
  }
  if (op === "-") {
    return front - back;
  }
  if (op === "*") {
    return front * back;
  }
}
