function solution(s) {
  let answer = [];

  let indexWord = "";
  let xWord = "";
  let isXWord = 0;
  let isNotXWord = 0;

  s.split("").forEach((word, index) => {
    if (indexWord === "") {
      indexWord += word;
      xWord = word;
      isXWord += 1;

      if (index === s.split("").length - 1 && indexWord.length >= 1) {
        answer.push(indexWord);
      }
      return;
    }

    if (word === xWord) isXWord += 1;
    else if (word !== xWord) isNotXWord += 1;

    indexWord += word;

    if (isXWord === isNotXWord) {
      answer.push(indexWord);
      indexWord = "";
    }
    if (index === s.split("").length - 1 && indexWord.length >= 1) {
      answer.push(indexWord);
    }
  });

  return answer.length;
}
