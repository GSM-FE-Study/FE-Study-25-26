function solution(park, routes) {
  let h = park.length;
  let w = park[0].length;

  let start = [0, 0];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === 'S') {
        start = [i, j];
      }
    }
  }

  let directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (let i = 0; i < routes.length; i++) {
    let [op, n] = routes[i].split(' ');
    n = Number(n);
    let [dx, dy] = directions[op];
    let nx = start[0];
    let ny = start[1];
    let valid = true;

    for (let j = 0; j < n; j++) {
      nx += dx;
      ny += dy;
      if (nx < 0 || ny < 0 || nx >= h || ny >= w) {
        valid = false;
        break;
      }
      if (park[nx][ny] === 'X') {
        valid = false;
        break;
      }
    }

    if (valid) {
      start = [nx, ny];
    }
  }

  return start;
}
