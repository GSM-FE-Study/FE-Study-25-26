function solution(n, t) {
    let answer = 0;
    for(let i=0;i<t;i++){
    answer = n*(2**t);
    }
    return answer;
}