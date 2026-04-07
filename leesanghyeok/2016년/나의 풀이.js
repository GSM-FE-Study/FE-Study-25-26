function solution(a, b) {
  let result = -1;
  const daysObject = {
    1: "SAT",
    2: "SUN",
    3: "MON",
    4: "TUE",
    5: "WED",
    6: "THU",
    0: "FRI",
  };

  const daysInMonth = {
    1: 31,
    2: 29, // 윤달
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  for (let i = 1; i < a; i++) result += daysInMonth[i];

  return daysObject[(result + b) % 7];
}
