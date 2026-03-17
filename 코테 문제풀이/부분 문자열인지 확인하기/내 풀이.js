function solution(my_string, target) {
    let answer=my_string.includes(target)
    let num= ((answer===true)?1:0);
    return num;
}