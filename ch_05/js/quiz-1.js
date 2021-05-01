function sumMulti(a, b){
    let result = 0;
    
    if(a === b){
        result = a * b;
    }
    else{
        result = a + b;
    }
    return result;
}

for(let i =1; i<=2; i++){   //첫번째는 5, 10 입력하고 두번쨰는 10, 10 입력!!!
    var num1 = parseInt(prompt("첫번쨰 수를 입력해주세요"));
    var num2 = parseInt(prompt("두번쨰 수를 입력해주세요."));
    result = sumMulti(num1, num2);
    
    console.log(result);
}
//답하고는 다르지만 결과는 같음!
