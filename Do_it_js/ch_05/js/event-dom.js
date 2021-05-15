let coverImage = document.querySelector("#cover");
coverImage.onclick = function() {
    alert("눌렀습니다.");
};  //익명함수 - 클릭시 이벤트

coverImage.onmouseover = function(){
    coverImage.style.border = "5px black solid";
};  //익명함수2 - 마우스 올렸을시 이벤트

coverImage.onmouseout = function(){
    coverImage.style.border = "";
};  //익명함수3 - 마우스 올렸다가 범위 벗어났을 때 이벤트