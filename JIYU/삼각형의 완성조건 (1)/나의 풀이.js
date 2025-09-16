function solution(sides) {
    let answer = 0;
    let max=0;
    for(let i=0;i<sides.length;i++){
        if(sides[i]>max)
            max=sides[i];
    }
    answer=sides[0]+sides[1]+sides[2];
    answer-=max;
    if(max>=answer)
        return 2;
    else
        return 1;
}