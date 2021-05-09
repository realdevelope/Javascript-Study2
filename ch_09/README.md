# CH_09 폼과 자바스크립트
## 09-1 폼 요소에 접근하는 여러가지 방법
1. id 값이나 class 값을 사용해 폼 요소에 접근하기<br>
   ```
   document.querySelector("billingNmae").value; //id로 접근하기
   document.querySelector(".input-box").value;  //class로 접근하기
   ```
2. name 값을 사용해 폼 요소에 접근하기<br>
   ```
   document.ship.shippingName.value;  //form의 name값, 텍스트필드의 name값을 사용
   document.forms["ship"].elements["shippingName"].value;  // 이렇게도 가능함
   ```
3. 폼 배열을 사용해 폼 요소에 접근하기<br>
   ```
   document.forms;            //forms 요소 확인(개수확인가능)
   document.forms[0].elements;   //forms 배열의 첫번쨰 요소 접근
   document.forms[0].elements[0].value;   //forms 배열의 첫번쨰 요소의 값 가져옴
   ```
4. 배송 정보 자동 입력 프로그램 만들기 - 주문정보 내용 가져오기<br>
   -> order.html, oreder.js 참고


## 09-2 폼 요소에서 입력값 검증하기
폼 벨리데이션(Form Validation, 입력값검증)<br>
값이 입력되었는지, 입력된 값이 정해진 조건에 맞는지 등을 검사하는 작업

1. 입력값 검증 프로그램 만들기 - 아이디 글자 수, 비밀번호 확인하기<br>
   -> register.html, register.js 참고


## 09-3 다양한 폼 요소 다루기
1. 선택 목록 및 옵션 항목에 접근하기<br>
   -선택목록(```<select>```) : ``` <option> ``` 태그를 사용하여 여러 항목을 한꺼번에 지정한뒤 목록을 펼쳐 원하는 항목을 선택<br>
    ```
     document.testForm.magjor;    //form, 선택목록의 name값으로 접근
     document.testForm.magjor.options;    //선택목록의 개수 확인(배열형식)
     document.testForm.magjor.options[4];  //다섯번째 옵션 항목에 접근
     document.testForm.major.options.innerText  //다섯번째 옵션 화면에 표시
     document.testForm.major.option[4].value;   //다섯번쨰 옵션의 서버 전달값
     ```

2. 선택 목록에서 사용자가 선택한 옵션 항목 찾아내기
   ```
   document.testForm.major.option.selectedIndex    //몇번쨰 옵션인지 확인
   >>> 3
   ```
3. 라디오 버튼과 체크 상자에 접근하기<br>
   -라디오버튼의 name값은 모두 같고, 체크상자의 name값은 모두 다르게 설정
   ```
    document.testForm.subject    //form, 라디오버튼 name값으로 접근
    document.testForm.mailing1   //from, 체크상자의 name값으로 접근

    document.testForm.subject[1].checked;    //라디오버튼 체크 후 확인
    >>>true
    document.testForm.mailing1.checked;      //체크상자 체크 후 확인
    >>>true  
   ```