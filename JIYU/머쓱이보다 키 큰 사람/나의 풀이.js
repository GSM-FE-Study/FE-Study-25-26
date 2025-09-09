function solution(array, height) {
    let answer = 0;
    for(let i=0;i<array.length;i++){
        if(height<array[i])
            answer++;
    }
    return answer;
}