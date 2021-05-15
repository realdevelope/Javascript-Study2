function compare(a, b){
    if(a > b){
        alert(a + "(이)가 " + b + "보다 큽니다.");
    }
    else if(b > a){
        alert(b + "(이)가 " + a + "보다 큽니다.");
    }
    else{
        alert(b + " 와(과) " + a + "(이) 같습니다.");
    }
}

let num1 = parseInt(prompt("비교할 첫번째 숫자"));
let num2 = parseInt(prompt("비교할 두번째 숫자"));
compare(num1, num2);

//정답과 다르지만 의도대로 비교하여 더큰수를 알림창에 띄움
//예외조건으로 같을시 같다고 추가함