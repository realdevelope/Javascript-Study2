/*
    과제1 - else 는 정말 필요한가요?⭕

    아래의 첫번째 코드에서 else 문을 삭제해도 기존 코드와 동일하게 작동할까요?
*/
//첫번쨰 - else를 사용
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('보호자의 동의를 받으셨나요?');
    }
  }


//두번째 - else를 제거
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('보호자의 동의를 받으셨나요?');
}

// 정답 : 없어도 동일하게 작동한다.




/*
    과제 2 - ? 나 || 를 사용하여 함수 다시작성하기⭕
*/
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('보호자의 동의를 받으셨나요?');
    }
  }

  //정답
  function checkAge(age){
      (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?");
  }



/*
    과제 3 - min(a, b) 함수 만들기⭕

    a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.
    만든 함수는 아래와 같이 동작해야 합니다.    
*/
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


function min(a, b){
    if(a > b){
        return b;
    }
    else if(a < b){
        return a;
    }
    else if(a == b){
        return a;
    }
}


/*
    과제 4 - pow(x, n) 함수 만들기

    x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. 
    x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.
    프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고 pow(x,n)의 반환 값을 보여주는 코드를 작성해 보세요.
    주의사항: n은 1 이상의 자연수이어야 합니다. 이외의 경우엔 자연수를 입력하라는 얼럿 창을 띄워주어야 합니다.
*/

let x = prompt("숫자를 입력하세요");
let n = prompt("제곱근의 숫자를 입력하세요");
let result = x;

function pow(x, n){

    for(let i =1; i < n; i++){
        result *= x;
    }
    return result;
}


if(n > 1){
    alert( pow(x, n) );
}
else{
    alert("자연수를 입력하세요.");
}