/*
    과제1 - if 와 문자열
        아래 코드에서 alert는 실행될까요?
*/

if ("0") {
  alert( 'Hello' );     //실행된다.
}


/* 
    과제2 - 자바스크립트의 공식이 이름
        if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"
        라는 질문을 하는 코드를 작성해 보세요.
        사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 
        아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.
*/

let jsName = prompt("자바스크립트의 공식 이름은 무엇일까요?");

if(jsName == "ECMAScript"){
    alert("정답입니다!");
}
else{
    alert("모르셨나요? 정답은 ECMAScript 입니다!");
}


/* 
    과제3 - 입력받은 숫자의 부호 표시하기 
        if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 
        아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

        입력받은 숫자가 0보다 큰 경우 1을 출력
        입력받은 숫자가 0보다 작은 경우 -1을 출력
        입력받은 숫자가 0인 경우 0을 출력
        (사용자는 항상 숫자를 입력한다고 가정)
*/

let number = prompt("숫자를 입력해 주세요");

if(number > 0){
    alert("1");
}
else if(number < 0){
    alert("-1");
}
else if(number == 0){
    alert("0");
}

/*
    과제4 - if 를 ? 로 교체하기
        조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 
        동작 결과는 동일해야 합니다.
       
        let result;

        if (a + b < 4) {
        result = '미만';
        } else {
        result = '이상';
        }
*/

let result = a + b < 4 ? "미만" : "이상"; 



/*
    과제5 - if..else 를 ? 로 교체하기
        조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 
        동작 결과는 동일해야 합니다.

        let message;

        if (login == '직원') {
        message = '안녕하세요.';
        } else if (login == '임원') {
        message = '환영합니다.';
        } else if (login == '') {
        message = '로그인이 필요합니다.';
        } else {
        message = '';
        }
*/ 

let message = login == "직원" ? "안녕하세요." : 
              login == "임원" ? "환영합니다." : 
              login == "" ? "로그인이 필요합니다." : "";