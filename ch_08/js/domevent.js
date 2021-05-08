    let pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    /* 
    - ①이벤트유형 : 해당 함수에서 이벤트 유형 지정시엔 on 을 붙이지 않는다.
    - ②함수 : 실행할 명령이나 함수를 지정
    - ③캡처여부 : true이면 캡처링, false이면 버블링
    */ 
    pic.addEventListener("mouseout", originPic, false);
   
		function changePic() {			
			pic.src = "images/boy.png";
    }

    function originPic(){
      pic.src = "images/girl.png";
    }

    /*
    function drawBorder() {
      pic.style.border = "2px dotted #666";
    }
    */