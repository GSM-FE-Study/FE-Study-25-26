function solution(a, b) {
    let bb = Number(String(a) + String(b));
    let mm = 2 * a * b;
    return bb > mm ? bb : mm;
}