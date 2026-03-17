function nextSqaure(n) {
  //함수를 완성하세요
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no";
  }
}
