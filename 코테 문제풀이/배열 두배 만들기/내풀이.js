function solution(numbers) {
    const answer = [];
    for(let i=0; i< numbers.length;i++){
    const dobleNum=numbers[i]*2;
    answer.push(dobleNum);
    }
    return answer;
}