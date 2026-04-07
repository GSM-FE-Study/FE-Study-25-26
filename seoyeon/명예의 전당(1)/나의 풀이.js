function solution(k, score) {
  let answer = [];
  let hallOfFame = [];

  for (let i = 0; i < score.length; i++) {
    let todayScore = score[i];
    hallOfFame.push(todayScore);
    hallOfFame.sort((a, b) => b - a);
    if (hallOfFame.length > k) {
      hallOfFame = hallOfFame.slice(0, k);
    }
    let lowestScore = hallOfFame[hallOfFame.length - 1];
    answer.push(lowestScore);
  }

  return answer;
}
