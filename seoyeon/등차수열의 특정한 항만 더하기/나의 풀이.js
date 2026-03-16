function solution(a, d, included) {
    let answer = a;
    let value = 0;

    included.forEach((bool) => {
      if (bool) {
        value += answer;
      }
      answer += d;
    });
    return value;
}