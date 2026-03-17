function solution(n) {
    var answer = [n];
    if(n===1) return answer;
    while(true){
        if(n%2===0){
            n=n/2;
        }
        else{
            n=n*3+1
        }
        answer.push(n);
        if(n===1){
            break;
        }
    }
    return answer;
}