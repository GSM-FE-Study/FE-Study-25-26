function solution(a, b) {
  const strA = String(a);
  const strB = String(b);
  const ab = Number(strA + strB);
  const ba = Number(strB + strA);
  if (ab >= ba) {
    return ab;
  } else {
    return ba;
  }
}
