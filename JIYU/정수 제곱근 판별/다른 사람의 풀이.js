function nextSqaure(n){
 var result = 0; 
  var x = 0; 
  while ( x*x < n)
  { 
    x++; 
  }
  if (x*x == n)
  { 
    x++; 
    result = x*x; 
  }else{ 
    result = 'no'; 
  } 
  return result;

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));