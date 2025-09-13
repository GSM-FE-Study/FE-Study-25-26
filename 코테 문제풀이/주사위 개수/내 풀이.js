function solution(box, n) {
    const a = Math.floor(box[0] / n);
    const b = Math.floor(box[1] / n);
    const c = Math.floor(box[2] / n);
    const answer = a * b * c;
    return answer;
}