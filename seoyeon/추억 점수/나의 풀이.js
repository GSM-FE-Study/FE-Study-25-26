function solution(name, yearning, photo) {
  const score = {};
  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  const answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (score[photo[i][j]]) {
        sum += score[photo[i][j]];
      }
    }
    answer.push(sum);
  }

  return answer;
}
