function solution(n) {
    let answer = 2;
    for(let i=1;i<=n;i++){
        const num=i*i;
        if(num===n)
            answer=1;
    }
    return answer;
}