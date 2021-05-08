d# CH_08 웹문서를 다루는방법, 문서 객체 모델(DOM)
## 08-1 문서 객체 모델이란?
문서 객체 모델(DOM)<br>
웹 문서의 모든 요소를 자바스크립트를 이용하여 조작할 수 있도록 객체를 사용해 문서를 해석하는 방법

1. DOM을 사용하지 않고 상세 설명 가리기<br>
    -CSS를 작성한다
   ```
   <h3 style = visivility : hidden>상세설명</h3>
   <p style = visivility : hidden>자바스크립트는 어쩌고 저쩌고....</p>
   ```

2. DOM 을 사용하여 상세 설명 가리기<br>
    -JS로 DOM을 제어
    ```
    <h3>상세설명</h3>
    <p></p>자바스크립트는 어쩌고 저쩌고....</p>

    document.querySelector("h3").style.visibility = "hidden";
    document.querySelector("p").style.visibility = "hidden"; 
    ```

3. DOM 트리 - DOM 구조는 나무처럼 생겼다<br>
      -DOM은 웹 문서의 요소를 부모 요소와 자식요소로 구분한다. -> DOM트리<br>
      -DOM 트리는 가지와 노드로 표현한다.<br>
      -DOM 트리는 웹문서를 아래와 같이 표현한다.<br>
      * 웹 문서의 태그는 요소(Element) 노드로 표현
      * 태그가 품고 있는 텍스트는 해당 요소 노드(태그)의 자식 노드인 속성(Attribute) 노드로 표현
      * 태그의 속성은 모두 해당 요소 노드(태그)의 자식 노드인 속성(Attribute) 노드로 표현
      * 주석은 주석(Comment)노드로 표현
4. DOM 트리 자세히 살펴보기<br>
       -http://software.hixie.ch/utilities/js/live-dom-viewer/ 
      

## 08-2 DOM 요소에 접근하기
1. DOM 요소에 접근하는 여러가지 방법
    * DOM 요소를 id 선택자로 접근하는 함수 - getElementByid()
      ```
      <body>
        <h1 id = heading>최준</h1>
      </body>
      ```
      ```
      document.getElementById("heading").onclick = function(){
        this.style.fontSize = "5em";
      }
      ```
    * DOM 요소를 class 값으로 찾아내는 함수 - getElementsByClassName()
      ```
      <p><span class="accent">철이 없었죠</span>.. 커피가 좋아서 <span class = "accent">에타오피아</span>에 유학을 했다는 자체가</p>
      ```
      ```
      document.getElementsByClassName("accent").style.textDecoration = "underline";
      ```
    * DOM 요소를 태그이름으로 찾아내는 함수 - getElementsByTagname()
      ```
      <body>
        <h2>어 이쁘다!</h2>
      </body>
      ```
      ```
      document.getElementsByTagName("h2");
      ```
    * DOM 요소를 다양한 방법으로 찾아주는 함수 - querySelector(), querySelectorAll()<br>
      -id값, class값, 태그이름 모두 사용가능 
      ```
      document.querySelector("#heading")  //id 로 접근 - 샵(#)을 사용
      document.querySelector(".accent")   //class 로 접근- 점(.)을 사용
      document.querySelector("h2")    //태그 이름으로 접근 - 태그 그대로 사용
      ```
      

## 08-3 웹 요소의 속성 가져와서 수정하기
1. HTML 태그 속성을 가져오거나 수정하는 함수 - getAttribute(), setAttribute()<br>- getAttribute()로 접근하여 속성을 가져온후 setAttribute()로 그속성을 변경시키는 작업
      ```
      <div id= "prod-img>
          <img src ="images/coffe-pink.jpg" alt="에디오피아">
      </div>
      ```
      ```
      document.querySelector("#prod-img > img").getAttribute("src")
      >>>"images/coffee-pink.jpg"

      document.querySelector("#prod-img > img").setAttribute("src", "images/coffee-blue.jpg")
      ```

2. 선택한 이미지 표시하기 - 태그 속성을 사용해 상품 이미지 변경하기<br>
  showBig.html, showBig.js 파일 참고


## 08-4 DOM에서 이벤트 처리하기
1. 5장에서 배운 이벤트 처리방법 간단히 복습<br>
   * HTML 태그 안에서 이벤트 처리기 연결하기<br>
     ```
     <img id = "pic" src= "images/girl.png" onclick = "changePic()"> 
     ```
      ->이벤트를 중간에 바꾼다거나 함수를 바꾸려면 html 소스를 수정해야한다.
   * DOM 요소에 이벤트 처리기 연결하기
     ```
     <img id = "pic" src= "images/girl.png">

     <script>
     pic.onclick = changePic;   //pic 요소를누르면 changePic() 함수 실행
     </script>
     ```

2. addEventListenner()함수 사용하기
   ```
   let pic = document.querySelector("#pic");
   pic.addEventListener("mouseover", chagePic, false);
   pic.addEventListener("mouserout", originPic, false);

   function changePic(){
     pic.src = "images/boy.png";
   }

   function originPic(){
     pic.src = "images/girl.png";
   }
   ```


## 08-5 웹 요소 내용과 스타일 가져와서 수정하기
1. DOM으로 CSS 속성에 접근하고 수정하기<br>
   -색상 바꾸기  
   ```
   document.querySelector("#heading").style.color = "white";
   >>> "white"

   document.querySelector("#heading").style.backgroundColor = "gray";
   >>> "gray"     //background-color 같이 하이픈이 있는속성은 카멜표기법으로!!
   ```
   -웹 요소를 화며에 표시하기/감추기<br>
    * 화면에서 감추러면 display 속성값을 none으로 지정
    * 화면에 표시하려면 display 속성값을 blcok로 지정

2. 상세 설명 보기/닫기 - 상세 설명 링크 만들기<br>
   -> product.html, product.js 참고


## 08-6 DOM에 요소 추가하기
1. DOM에 새로운 노드를추가하는 방법<br>
   -새로운 노드를 만들거나 부모노드에 연결할떄는 아래의 함수를 사용
   * createElement() : 새로운 요소를 만듬
   * createTextNode() : 텍스트 노드를 만듬
   * appendChild() : 텍스트 노드를 요소노드에 자식노드로 추가
   * createAttribute() : 속성 노드를 만듬
   * setAttributeNode() : 속성 노드를 요소 노드에 연결
   * appendChild() : 새로 만든 요소 노드를 부모 노드에 추가

2. 웹 문서에 새로운 노드 추가하기<br>
   ①요소 노드 만들기 - createElement() 함수<br>
   ```
   let newP = document.createElement("p");  //새로운 p요소를 만들고 변수에 저장
   ```
   ②텍스트 노드 만들기 - createTextNode() 함수<br>
   ```
   let newText = document.createTextNode("주문이 완료되었습니다.");   //텍스트노드 생성후 변수에 저장
   ```
   ③자식 노드로 추가하기 - appendChild() 함수<br>
   ```
   newP.appendChild(newText);         //텍스트 노드를 newP의 자식노드로 추가
   document.body.appendChild(newP);   //newP를 body의 자식노드로 추가
   ```
   ④속성 노드 만들기 - createAttribute() 함수<br>
   ```
   let attr = document.createAttribute("class");  //속성노드를 만들어 변수에 저장
   attr.value = "accent";                         //속성값을 지정
   ```
   ⑤속성 노드 연결하기 - setAttributeNode() 함수<br>
   ```
   newP.setAttributeNode(attr);   //속성노드를 요소노드 p에 연결
   ```

3. 참가 신청 명단 프로그램 만들기 - 새노드 추가하고 표시하기<br>
   -> register.html, register.js 참고


## 08-7 추가한 노드 순서 바꾸거나 삭제하기
1. 여러 노드를 한꺼번에 저장하는 노드 리스트
   ```
	<div id="container">
			<h1>참석자 명단</h1>
			<div id="nameList">
				<p>홍길동 <span class="del">X</span></p>
				<p>백두산 <span class="del">X</span></p>
				<p>도레미 <span class="del">X</span></p>
			</div>
	</div>
   ```
   ```
   document.querySelectorAll("p");  // P태그로 참석자 명단 전부 가져오기
   >>> NodeList(3) [p, p, p]    

   document.querySelectorAll("p")[0];   // p태그의 첫번째 참석자명단 가져오기
   >>> <p>"홍길동"<span class="del">X</span></p>
   ``` 

2. DOM 트리를 활용해 원하는 노드 다루기
   * 자식 노드 확인하기 - hasChildNodes() 함수<br>
     - 특정 노드에 자식이 있는지를 확인하는 함수로써 있을시 true, 없을시 false를 반환
     ```
     document.querySelectorAll("p")[0].hasChildNodes()
     >>> true
     ```
   * 자식 노드에 접근하기 - childNodes 속성<br>
     - 현재 노드의 자식 노드에 접근할 수 있다. (태그와 태그상의 줄바꿈도 자식노드로 인식)
     ```
     document.querySelector("#nameList").childNodes
     >>> NodeList(7) [text, p, text, p, text, p, text]
     ```
   * 원하는 위치에 노드 삽입하기 - insertBefore() 함수<br>
     - 자식 노드를 추가할 때 기준이 되는 노드를 지정하고 그 앞에 자식노드를 추가할 수 있다.<br>
     - 2개의 인수를 사용 - 첫번쨰인수는 추가하는 노드, 두번쨰 인수는 기준이 되는 노드 
     ```
     let nameList = document.querySelector("#nameList");

     nameList.insertBefore(nameList.children[2], nameList.children[0]);
     >>> <p>"도레미"<span class ="del">X</span></p>
     ```
   * 특정 노드 삭제하기 - removeChild() 함수와 parentNode 속성<br>
     - removeChild() 는 부모 노드에서 자식노드를 삭제하는 함수
     - parentNode속성은 부모노드 정보를 가지고 있는 속성
     ```
     document.querySelectorAll(".del")[0].parentNode; //부모노드 정보를 확인
     >>> <p>"홍길동"<span class="del">X</span></p>

     let firstDel = document.querySelectorAll(".del")[0]; //첫번쨰X
     let firstP = document.querySelectorAll("p")[0];    //첫번쨰 P
     firstP.removeChild(firstDel);    //첫번째 p요소에 있는 x 삭제
     >>> <span class="del">X</span>   
     ``` 
    * 참가신청 명단 프로그램 만들기 - 맨위에 이름 추가,삭제<br>
      -> register.html, register.js 참고

