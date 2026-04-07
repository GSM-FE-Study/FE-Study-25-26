function solution(my_string) {
    var answer = [];

    for (let i = 0; i < my_string.length; i++) {
        let array = my_string.slice(i);
        answer.push(array);
    }

    answer.sort();

    return answer;
}
