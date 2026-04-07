function solution(arr, query) {
  let currentArr = arr;
  for (let i = 0; i < query.length; i++) {
    let index = query[i];
    if (i % 2 === 0) {
      currentArr = currentArr.slice(0, index + 1);
    } else {
      currentArr = currentArr.slice(index);
    }
  }
  return currentArr;
}
