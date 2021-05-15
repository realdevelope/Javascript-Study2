let slides = document.querySelectorAll("#container > img"); //이미지를 저장한 배열 
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let current = 0;
showSlide(current); //current 위치의 이미지 표시
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n){
    for(let i=0; i < slides.length; i++){
        slides[i].style.display ="none";    //모든 이미지를 화면에서 숨김
    }
    slides[n].style.display = "block"   //n번째 이미지를 화면에 표시
}

function prevSlide(){
    if(current > 0){    //현재 이미지가 첫번쨰 이미지가 아니라면 이전 위치로
        current -= 1;
    }
    else{               //현재 이미지가 첫번째 이미지라면 마지막으로
        current = slides.length -1;
    }
    showSlide(current);     //이동한 위치의 이미지 표시
}

function nextSlide(){
    if(current < slides.length -1){
        current += 1;   //현재 이미지가 마지막 이미지가 아니라면 다음위치로
    }
    else{
        current = 0;    //현재 이미지가 마지막이라면 첫번째 위치로
    }
    showSlide(current)  //이동한 위치의 이미지 표시
}

