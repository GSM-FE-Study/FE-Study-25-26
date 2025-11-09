function solution(x) {
    let answer = String(x).split('');
    let sum = 0;
    for (let i = 0; i < answer.length; i++) {
        sum += Number(answer[i]);
    }
    return x % sum == 0;
}