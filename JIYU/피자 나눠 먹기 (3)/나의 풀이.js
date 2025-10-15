function solution(slice, n) {
    let answer = slice;
    for (let i = 2; i <= n; i++) {
        if (answer * i >= n) {
            return i;
        }
    }
}