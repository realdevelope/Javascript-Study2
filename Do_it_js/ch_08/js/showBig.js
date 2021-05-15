let bigPic = document.querySelector("#cup");    //큰 이미지 가져옴
let smallpics = document.querySelectorAll(".small"); // 작은 이미지들 가져옴

for(let i = 0; i < smallpics.length; i++){  //노드 리스트의 각 요소에 접근
    smallpics[i].onclick = showBig;     //요소를 누르면 showBIg() 함수 실행
}

function showBig(){
    let newPic  = this.src;     //click 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute("src", newPic);     //newPic 값을 bicPic src 속성에 할당
}