let userNumber = prompt("숫자를 입력하세요.");
let displayArea = document.querySelector("#result");

if(userNumber != null){
    if(userNumber % 3 === 0){
        displayArea.innerHTML = userNumber + "은 3의 배수입니다."
    }
    else{
        displayArea.innerHTML = userNumber + "은 3의 배수가 아닙니다.";
    }
}
else{
    alert("입력이 취소되었습니다.");
}