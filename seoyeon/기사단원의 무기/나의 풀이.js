function solution(number, limit, power) {
  let totalIron = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;
    let sqrt = Math.floor(Math.sqrt(i));

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        divisorCount += 1;
        if (j !== i / j) divisorCount += 1;
      }
    }

    if (divisorCount > limit) divisorCount = power;

    totalIron += divisorCount;
  }

  return totalIron;
}
