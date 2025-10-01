function solution(num_list) {
    let sumsum = 0;
    let product = 0;
    for(let i=0; i<num_list.length;i++){
        sumsum+=num_list[i];
        product*=num_list[i];
    }
    sumsum=sumsum*sumsum;
    if(sumsum>product)
        return 1;
    else
        return 0;
}