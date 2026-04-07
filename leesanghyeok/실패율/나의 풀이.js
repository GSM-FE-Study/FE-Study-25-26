function solution(N, stages) {
  let stagesObject = new Object();
  let stageClearObject = new Object();

  let stageClearPercent = new Object();

  for (let i = 1; i <= N; i++) {
    stageClearObject[i] = 0;
    stagesObject[i] = 0;
  }

  stages.forEach((stage) => {
    if (stage > N) return;

    if (!stageClearObject[stage]) {
      stages.forEach((clear) => {
        if (clear >= stage) {
          stageClearObject[stage] += 1;
        }
      });
    }

    stagesObject[stage] += 1;
  });

  for (let i = 1; i <= N; i++) {
    stageClearPercent[i] = stagesObject[i] / stageClearObject[i];
  }

  const sortedKeys = Object.entries(stageClearPercent)
    .sort((a, b) => {
      const valA = typeof a[1] === "number" && !isNaN(a[1]) ? a[1] : 0;
      const valB = typeof b[1] === "number" && !isNaN(b[1]) ? b[1] : 0;

      if (valA !== valB) return valB - valA;

      return Number(a[0]) - Number(b[0]);
    })
    .map(([key]) => Number(key));

  return sortedKeys;
}
