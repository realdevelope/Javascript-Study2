let userId = document.querySelector("#user-id");
let pw1 = document.querySelector("#user-pw1");
let pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){    //아이디 길이가 4자리 이하거나 15자리 이상일떄
        alert("4~15자리의 영문과 숫자를 사용하세요");   //오류메세지 출력
        userId.select();    //다시 입력할 수 있도록 userId 필드 선택
    }
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.");   //오류메세지 출력
        pw1.value = ""; //비밀번호 필드 지움
        pw1.focus();    //비밀번호를 다시 입력할 수 있게 커서를 둠 (포커싱)
    }
}

function comparePw(){
    if(pw2.value != pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요");
        pw2.value = ""; 
        pw2.focus();
    }
}