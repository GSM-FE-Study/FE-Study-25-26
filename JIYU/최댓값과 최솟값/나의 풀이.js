function solution(s) {
    let answer = 0;
    answer=s.split(' ');
    let max=answer[0];
    let min=answer[0];
    for(let i=1;i<answer.length;i++){
        if(answer[i]>=Number(max)){
            max=Number(answer[i]);
        }
        if(answer[i]<Number(min)){
            min=Number(answer[i]);
        }
    }
    answer= `${min} ${max}`
    return answer;
}