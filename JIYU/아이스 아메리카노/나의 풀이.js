function solution(money) {
    var answer = [];
    let a=0;
    let b=0;
    a = parseInt(money/5500);
    b = money%5500;
    answer[0] = a;
    answer[1] = b;
    return answer;
}