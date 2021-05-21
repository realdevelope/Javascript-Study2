/*
    과제 1 - 반복문의 마지막 값⭕

    아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요? 
    이유도 함께 설명해보세요.
*/ 
let i = 3;

while (i) {
alert( i-- );       // 1   이유 : i=3일떄 부터 0일떄까지 반복하기떄문에 0이되는순간 
                    //            본문을 실행하지 않고 반복문이 종료된다.(멈춘다)
}


/*
    과제 2 - while 반복문의 출력값 예상하기⭕

    while 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요.
    아래 두 예시는 같은 값을 출력할까요?
*/
let i = 0;
while (++i < 5) alert( i );     // 1, 2, 3, 4, 5

let i = 0;
while (i++ < 5) alert( i );     // 0, 1, 2, 3, 4

/*
    과제 3 - for 반복문의 출력 값 예상하기⭕

    for 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요.
    아래 두 예시는 같은 값을 출력할까요?
*/ 
for (let i = 0; i < 5; i++){
    alert( i );              // 0, 1, 2, 3, 4
}               

for (let i = 0; i < 5; ++i){
    alert( i );             // 1, 2, 3, 4, 5
    }     



/*
    과제 4 - for 반복문을 이용하여 짝수 출력하기⭕

    for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요.     
*/ 
for(let i = 2; i <= 10; i++){
    if( i % 2 == 0){
        alert( i );
    }
}


/*
    과제 5 -for 반복문을 while 반복문으로 바꾸기⭕

    for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 
    출력 결과도 동일해야 합니다.
*/

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );        //0 , 1 ,2
  }

let i = 0;
while(i <= 2){
    alert( `number ${i}!` );        // 0, 1, 2
    i++;
}


/*
    과제 6 - 사용자가 유효한 값을 입력할 떄까지 프롬프트 창 띄우기⭕
    
    사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 
    사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.
    사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 
    확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.
    사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 
    숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.
*/
let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.");
} 
while(num <= 100 || num == null);


/*
    과제 7 - 소수 출력하기 ->❌틀림...

    소수(prime number)는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수입니다.
    다시 말해서 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수를 소수라고 부르죠.
    5는 2나 3, 4로 나눌 수 없기 때문에 소수입니다. 5를 이들 숫자로 나누면 나머지가 있기 때문이죠.
    2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.
    n = 10이라면 결과는 2,3,5,7이 되어야겠죠.
    주의: 작성한 코드는 임의의 숫자 n에 대해 동작해야 합니다.
*/

let n = prompt("소수인지 확인할 숫자를 입력하세요.");

nextPrime:
for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert( i ); // 소수
}