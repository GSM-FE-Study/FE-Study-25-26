function solution(my_string, n) {
    let r = "";
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            r += my_string[i];
        }
    }
    return r;
}