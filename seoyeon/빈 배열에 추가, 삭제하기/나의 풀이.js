function solution(arr, flag) {
  const X = [];

  for (let i = 0; i < arr.length; i += 1) {
    const v = arr[i];

    if (flag[i]) {
      X.push(...Array(v * 2).fill(v));
    } else {
      X.splice(X.length - v, v);
    }
  }

  return X;
}
