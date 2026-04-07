function solution(survey, choices) {
  let answer = [];
  const surveyObject = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const scoreObject = {
    1: 3,
    2: 2,
    3: 1,
    5: 1,
    6: 2,
    7: 3,
  };

  survey.forEach((x, index) => {
    const splitedArray = x.split("");

    if (choices[index] === 4) return;

    const isSelect =
      Math.abs(choices[index] - 7) > Math.abs(choices[index] - 1);

    isSelect
      ? (surveyObject[splitedArray[1]] += scoreObject[choices[index]])
      : (surveyObject[splitedArray[0]] += scoreObject[choices[index]]);
  });

  const indexArray = Object.entries(surveyObject);

  for (let i = 0; i < indexArray.length; i += 2) {
    if (indexArray[i][1] === indexArray[i + 1][1]) {
      answer.push([indexArray[i][0], indexArray[i + 1][0]].sort()[0]);
    } else {
      indexArray[i][1] > indexArray[i + 1][1]
        ? answer.push(indexArray[i + 1][0])
        : answer.push(indexArray[i][0]);
    }
  }
  return answer.join("");
}
