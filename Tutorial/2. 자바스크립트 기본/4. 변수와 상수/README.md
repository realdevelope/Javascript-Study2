# 변수와 상수
## 변수
데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소’ 입니다.
```
let message;
message = "hello!";  //문자열 저장

alert(message);   //변수에 저장된 값을 보여줌
```
or
```
let message = "hello!"  //변수를 정의하고 값을 할당
alert(message); 
```
or
```
let user = 'John', age = 25, message = 'Hello';   //가독성 좋지 못함
```
or
```
let user = 'John';
let age = 25;
let message = 'Hello';    //가독성 좋음
```

## 변수 명명 규칙
1. 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있다.
2. 첫글자는 숫자가 될 수 없다.
3. 대소문자를 구별한다
4. 예약어는 사용할 수 없다.

## 상수
변화하지 않는 변수. 선언할 땐, lconst를 사용합니다.
```
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001';      //재할당할 수 없으므로 에러뜸
```

## 대문자 상수
기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것
```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00"
```
 - 기억하기 쉽다
 - 오타 확률이 적다
 - 가독성 좋다

## 바람직한 변수명
  - 간결하고 명확해야 한다.
  - 참고할만한 좋은 규칙
  - serName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용
  - 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피한다.
  - 최대한 서술적이고 간결하게
  - data와 value는 나쁜 이름의 예시이다. 
  - 자신만의 규칙이나 소속된 팀의 규칙을 따르자 
