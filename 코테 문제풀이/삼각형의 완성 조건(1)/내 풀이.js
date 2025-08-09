function solution(sides) {
    let max = Math.max(...sides)
    let sum = sides.reduce((a, b) => a + b) - max;
    return (max >= sum) ? 2 : 1
}