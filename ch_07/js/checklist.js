let itemList = [];
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", addList);  //addBtn 클릭시 addList 함수 실행

function addList(){
    let item = document.querySelector("#item").value;   //텍스트 필드 내용 가져옴

    if(item != null){
        itemList.push(item);    //itemList 배열 끝에 item 변수값 추가
        document.querySelector("#item").value = ""; //id = "item" 인 요소 값을 지움 - 텍스트필드에 입력한텍스트 떠있는거 지움
        document.querySelector("#item").focus();    //텍스트필드에 focus()적용 - 커서깜빡임
    }
    showList();
}

function showList(){
    let list = "<ul>"; //ul 태그 저장

    for(let i = 0; i < itemList.length; i++){   //배열요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";  //각 요소를 li로 묶음
    }
    list += "</ul>" //끝내는 ul 태그 저장

    document.querySelector("#itemList").innerHTML = list;   //list 변숫값 표시

    let remove = document.querySelectorAll(".close");   //삭제버튼을 변수로 저장-배열형태가됨

    for(let j = 0; j < remove.length; j++){
        remove[j].addEventListener("click", removeList);    //클릭시 removeList 실행
    } 
}

function removeList(){
    //console.log(this);
    let id = this.getAttribute("id");   //삭제버튼 누른 id 값을 가져와 id 변수에 저장

    itemList.splice(id, 1);     //인덱스값이 id인 요소 1개 삭제
    showList();
}





