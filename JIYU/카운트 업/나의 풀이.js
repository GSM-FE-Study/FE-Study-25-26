function solution(start_num, end_num) {
    var answer = [];
    for (let i = 1; i < end_num - start_num; i++) {
        answer[0] = start_num;
        answer[i] = answer[0] + i;
        answer[end_num - start_num] = end_num;
    }
    return answer;
}