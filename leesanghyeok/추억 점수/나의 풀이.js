function solution(name, yearning, photo) {
  let answer = [];

  let scoreObject = new Object();

  for (let i = 0; i < name.length; i++) {
    scoreObject[name[i]] = yearning[i];
  }

  photo.forEach((names, index) => {
    answer[index] = 0;
    names.forEach((name) => {
      if (scoreObject[name]) answer[index] += scoreObject[name];
    });
  });

  return answer;
}
