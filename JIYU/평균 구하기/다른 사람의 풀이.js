function average(array){
    return array.reduce((a,b) => a+b) / array.length;
}

var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));