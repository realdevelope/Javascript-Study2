// 랜덤값 생성
let count = 0;
let random = Math.floor(Math.random() * 100) + 1;   //결과값에 100을 곱하고 1을 더함
//console.log(random);


//입력한값 가져오기
function finding(){
    let user = document.querySelector("#try").value;    //사용자가 입력한 값을 user변수에 저장

    if(user >= 1 && user <= 100){   //사용자가 입력한 값이 1~100인지 확인
        
        //랜덤값 생성한것과 사용자가 입력한값 비교
        if(random > user){
            document.querySelector("#display").innerHTML = "UP !"   //display영역에 up표시
        }
        else if(random < user){
            document.querySelector("#display").innerHTML = "DOWN !" //       ''     down표시
        }
        else{   //숫자를 맞췄을 경우
            document.querySelector("#display").innerHTML = "딩 동 댕 !" //    ''    딩동댕표시
        }
        document.querySelector("#try").value = ""   // 텍스트필드 다시 입력하도록 지우기       
    }
    else{
        alert("1과 100사이의 숫자를 입력해주세요.");
    }
}

//엔터키로 확인 누르기 (답답해서 만듬)
document.querySelector("#try").onkeydown = function(e) {  //키보드 클릭해서 함수 실행
    if (e.keyCode == 13 || e.which == 13) {  // enter 키인지 체크
      finding();  
      return false;  // keydown일 때 브라우저가 할 기본 동작 취소(리로드x)
     }
  }      