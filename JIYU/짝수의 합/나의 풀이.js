function solution(n) {
    let answer = 0;
    for (;n>0;n--){
        if(n%2==0)
            answer+=n;
    }
    return answer;
}