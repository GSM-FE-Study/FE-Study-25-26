function solution(n) {
    let answer = n.toString().split("");
    let add=0;
    for(let i=0;i<answer.length;i++){
        add+=parseInt(answer[i]);
    }
    return add;
}