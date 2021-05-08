function newRegister(){
    let newP = document.createElement("p");

    let userName = document.querySelector("#userName");             //텍스트의 필드 내용 가져오기
    let newText = document.createTextNode(userName.value);      //텍스트 노드 생성

    newP.appendChild(newText);

    let delBttn = document.createElement("span");   //span요소 만들기
    let delText = document.createTextNode("X");     //텍스트노드 만들기
    delBttn.setAttribute("class", "del");   //버튼에 class 요소 속성 설정
    delBttn.appendChild(delText);   //텍스트 노드를 버튼요소의 자식요소로 추가
    newP.appendChild(delBttn);      //del 버튼을 p 요소의 자식요소로 추가


    let nameList = document.querySelector("#nameList");         //nameList 가져옴
    //nameList.appendChild(newP);                               //newP 노드를 nameList 노드의 자식 노드로 연결
    nameList.insertBefore(newP, nameList.childNodes[0]);    //p 요소를 맨 앞에 추가(맨위
    userName.value = "";                                        //다음 이름을 입력할 수 있도록 텍스트 필드 지우기

    let removeBttns = document.querySelectorAll(".del");

    for(let i =0; i < removeBttns.length; i++ ){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){     //현재노드의 부모노드의 부모노드가 있을시 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
                //현재 노드의 부모노드의 부모노드를 찾아 삭제
            }              
        });
    }
}