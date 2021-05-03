# CH_06
## 06-1 객체란

객체<br>
하나의 변수에 다양한 정보를 담기 위해 사용하는 자료형
```
let book = {
        title : "자바스크립트",
        author : "홍길동",
        pages : 500,
        price : 15000
}
```

->웹사이트나 애플리케이션의 자료를 다루려면 하나의 변수에 여러정보를 저장할 수 있는 객체가 필요함

객체의 종류
1. 내장 객체 (Built-in Object)<br>
        - 자주 사용하는 요소는 자바스크립트 안에 미리 객체로 정의되어 있는데 이를 내장객체라고 함<br>
        - ex) Date, Number, Boolead, Array, Math 등
2. 문서 객체 모델(DOM)<br>
        - 객체를 사용해 웹 문서를 관리하는 방식<br>
        - ex) Document객체, Image객체 등
3. 브라우저 객체 모델(BOM)<br>
        -웹 브라우저의 주소표시줄이나 창 크기 등 웹 브라우저 정보를 객체로 다루는것<br>
        - ex) History객체, Location객체, Screen객체 등
4. 사용자 정의 객체<br>
        - 사용자가 필요할 때마다 자신의 객체를 정의해서 사용하는것
        - ex) 위의 book 이 사용자 정의객체

객체의 속성과 메서드<br>
속성(Property)
- 객체에서 값을 담고 있는 정보를 속성이라고 부른다.<br>
- 객체의 속성 값을 가져올때는 객체이름 뒤에 마침표(.)를 찍고 그뒤에 속성이름을 적는다.
```
navigator.vendor;
>>> "Google Inc."       //크롬의 콘솔에서 입력시
```

메서드(Method)<br>
객체가 어떻게 동작할 지를 선언해 놓은 함수
```
window
>>>▶Window {0: global, window: Window, self: Window......}
```
객체의 프로토타입과 인스턴스<br>

프로토타입(Prototype)<br>
객체를 만들기 위한 기본 틀

인스턴스(Instance)<br>
프로토 타입을 사용해 만들어낸 객체<br><br>

객체의 인스턴스 만들기<br>
```
let now = new Date()
now
>>> Sat May 01 2021 18:57:12 GMT+0900 (대한민국 표준시)
```
```
now.toLocaleString()
>>>"2021. 5. 1. 오후 6:57:12"
```

내장 객체로 무작위 수 프로그램 만들기<br>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math#%EB%A9%94%EC%84%9C%EB%93%9C<br>
MATH객체와 관련된 여러가지 함수가 간단하게 설명되어있음<br>
ex) 그중에서 random() 함수를 사용
```
Math.random();                          // 무작위수 구하는 random() 사용
>>> 0.733600936134339
Math.random() * 100 + 1;                // 1 ~ 100까지의 숫자중 무작위수 구하기
>>> 63.57767570726005
Math.floor(random() * 100 + 1);         // floor() : 소수점 이하를 버리는 함수
>>> 40
```

## 06-2 사용자 정의 객체 만들기
사용자 정의 객체<br>
1. 리터럴 표기법을 사용해 객체를 만드는 방법<br>
 리터럴(Literal)<br>
    - 프로그래밍에서 자료를 표기하는 방식
    - 리터럴을 사용해서 표기한다는 것은 변수를 선언하면서 동시에 값을 지정해주는 표기 방식임
        ```
        let a = 10;
        ```
        ->콘솔창에서 리터럴 표기법으로 book 개체를 만들고, 새로운 속성을 추가하고 확인하기
<img src="./images/consol.png">

2. 리터럴 표기법으로 장난감 정보 객체 만들기<br>
->object.html, object.js 참고<br><br>

3. 생성자 함수를 사용해 객체를 만드는 방법<br>
        생성자 함수<br>
        객체를 만들어 내는 함수<br>

   ->콘솔창에서 간단하게 객체를 만들고 인스턴스 만들기
      <img src="./images/consol2.png"><br><br>

4. 생성자 함수로 도서 목록 객체 만들기<br>
 -> book.html, book.js 참고<br><br>

## 06-3 Date 객체를 활용해 기념일 계산기 만들기
Date 객체<br>
날짜와 시간 정보를 다루는 내장 객체

1. 현재 날짜 정보를 가지는 Date 객체 만들기
```
new Date()
>>> Sat May 01 2021 18:57:12 GMT+0900 (대한민국 표준시)
```

2. 특정 날짜나 시간 정보를 가지는 Date 객체 만들기
```
new Date("2021-05-01");                                 //년,월,일 만 지정시 9시 됨
>>>Sat May 01 2021 09:00:00 GMT+0900 (대한민국 표준시)  

new Date("2021-05");                                    //년,월 만 지정시 1일,9시 됨
>>>Sat May 01 2021 09:00:00 GMT+0900 (대한민국 표준시)  

new Date("2021-05-01T18:00:00");                        //시간까지 지정한 형식
>>>Sat May 01 2021 18:00:00 GMT+0900 (대한민국 표준시)  

new Date("2021-05-01T18:00:00z");                      //국제 표준시로 지정한 형식
>>>Sun May 02 2021 03:00:00 GMT+0900 (대한민국 표준시)
```

Date 객체의 주요 함수 알아 두기<br>
- get : 가져온다는 의미
- set : 설정한다는 의미
1. 날짜/시간 정보를 가져오는 함수
     - getFullYear() : 년도 정보를 가져와 4자리수로 표시
     - getMonth() : 월 정보를 가져와 0 ~ 11로, 0이 1월, 11이 12월로 표시
     - getDate() : 일 정보를 가져온다
     - getDay() : 요일 정보를 가져와 0 ~ 6 으로, 0이 월요일, 6이 토요일로 표시
     - getTime() : 1970년 1월 1일 자정 이후의 시간을 밀리초로 표시
     - getHours() : 시간의 정보를 0 ~ 23의 숫자로 표시
     - getMinutes() : 분의 정보를 0 ~ 59의 숫자로 표시
     - getSeconds() : 초의 정보를 0 ~ 59의 숫자로 표시
     - getMillseconds() : 0 ~ 999 숫자로 밀리초를 표시
2. 날짜/시간 정보를 설정하는 함수
     - setFullYear() : 년도를 네 자리 숫자로 설정
     - setMonth() : 0 ~ 11의 숫자로 월을 표시, 0이 1월 11이 12월
     - setDate() : 1 ~ 31의 숫자로 일을 설정
     - setTime() : 1970년 1월 1일 자정 이후의 시간을 밀리초로 설정
     - setHours() : 0 ~ 23의 숫자로 시간을 설정
     - setMinutes() : 0 ~ 59의 숫자로 분을 설정
     - setSeconds() : 0 ~ 59의 숫자로 초를 설정
     - setMillseconds() : 0 ~ 999 숫자로 밀리초를 설정

->getMonth() 와 getDay() 사용했을떄 결과값이 0부터 시작이므로 결과값에 1을 더해준다.

현재 날짜와 시간 정보 가져오기<br>
```
let now = new Date();     
now
>>>Sat May 01 2021 22:11:57 GMT+0900 (대한민국 표준시)

now.getDate()
>>>1

now.getDay();
>>>6

now.getTime();                       
>>>1619874717087

now.setDate(now.getDate() + 50);     //오늘날짜로 부터 50일이 지난 후의 날짜
>>>1624194717087

now
>>>Sun Jun 20 2021 22:11:57 GMT+0900 (대한민국 표준시)
```

기념일 계산 프로그램 만들기<br>
->dday.hml, dday.js 참고<br><br>

