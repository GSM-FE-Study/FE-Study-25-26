function solution(s) {
    let result = [];
    for (let i = 0;i<s.length;i++){
        const temp = s.slice(0, i);
        const cur = s[i];               

        if (temp.includes(cur)){
            result.push(i-temp.lastIndexOf(cur));
        }else{
            result.push(-1);
        }
    }
    return result;
}