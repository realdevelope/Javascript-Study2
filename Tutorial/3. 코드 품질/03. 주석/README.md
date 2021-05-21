# 주석
- 한줄짜리 주석 : //
- 여러줄의 주석 / * ... */

## 좋지 않은 주석
```js
// 이 코드는 (...)과 (...)을 수행합니다
// A라는 개발자가 이 기능에 대해 알고 있으며...
very;
complex;
code;
```
-> 좋은 코드엔 ‘설명이 담긴(explanatory)’ 주석이 많아선 안 됩니다. 주석 없이 코드 자체만으로 코드가 무슨 일을 하는지 쉽게 이해할 수 있어야 합니다.<br><br>


### 리팩토링 팁 : 함수 분리하기
```js
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // i가 소수인지를 확인함
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
```
```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;      // <-

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```
->함수 이름 자체가 주석 역할을 하므로 코드를 쉽게 이해할 수 있게 되었습니다. 이런 코드를 자기 설명적인(self-descriptive) 코드라 부릅니다


### 리팩토링 함수 만들기
```js
   // 위스키를 더해줌
   for(let i = 0; i < 10; i++) {
   let drop = getWhiskey();
   smell(drop);
   add(drop, glass);
   }

   // 주스를 더해줌
   for(let t = 0; t < 3; t++) {
   let tomato = getTomato();
   examine(tomato);
   let juice = press(tomato);
   add(juice, glass);
   }

   // ...
```

```js
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}
```


## 좋은주석
1. 아키텍처를 설명하는 주석
   - 고차원 수준 컴포넌트 개요, 컴포넌트 간 상호작용에 대한 설명, 상황에 따른 제어 흐름 등은 주석에 넣는 게 좋습니다
2. 함수 용례와 매개변수 정보를 담고 있는 주석
   - JSDoc이라는 특별한 문법을 사용하면 함수에 관한 문서를 쉽게 작성할 수 있습니다. 여기엔 함수 용례, 매개변수, 반환 값 정보가 들어갑니다.  
3. 왜 이런 방법으로 문제를 해결했는지를 설명하는 주석
4. 미묘한 기능이 있고, 이 기능이 어디에 쓰이는지를 설명하는 주석