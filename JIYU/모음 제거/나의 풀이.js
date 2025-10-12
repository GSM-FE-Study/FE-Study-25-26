function solution(my_string) {
    let answer = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter(ch => !answer.includes(ch)).join('');
}