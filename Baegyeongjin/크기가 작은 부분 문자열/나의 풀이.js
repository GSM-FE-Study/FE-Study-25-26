function solution(t, p) {
    let result = 0;
    const len = p.length;
    const pNum = Number(p);
  
    for (let start = 0; start + len <= t.length; start++) {
      const temp = Number(t.slice(start, start + len));
      if (temp <= pNum) result++;
    }
    return result;
  }