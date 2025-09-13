function solution(n) {
    let answer = [];
    let num = String(n);
    for(let i=num.length-1;i>=0;i--){
    answer.push(parseInt(num[i]));
    }
    return answer;
}