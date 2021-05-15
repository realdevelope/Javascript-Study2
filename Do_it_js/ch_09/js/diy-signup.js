let userId = document.querySelector("#user-id");
let pw1 = document.querySelector("#email");
let pw2 = document.querySelector('#user-pw1');

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("잘못 입력하셨습니다. 4~15자리로 입력해주세요");
        userId.select();
    }
}

function check(){
    if(pw1.value.length < 8){
        alert("잘못 입력하셨습니다. 8자리 이상으로 입력해주세요.");
        pw1.focus();
    }   
}

function comparePw(){
    if(pw2.value.length != pw1.value.length){
        alert("비밀번호가 다릅니다. 다시 입력해주세요.");
        pw2.focus();
    }
}
