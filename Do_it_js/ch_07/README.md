# CH_07
## 07-1 Array 객체란?
배열(Array)<br>
여러개의 항목을 하나의 변수에 저장해야할 떄 사용하는 것

Array객체로 배열 만들기<br>
```
let myArray = new Array();       //인스턴스

let numbers = ["one", "two", "three", "four"];            //리터럴을 사용한 배열
let numbers = new Array("one", "two", "three", "four");   //Array 객체를 사용한 배열
```

배열에서 for문 사용하기<br>
```
let seasons = ["봄", "여름", "가을", "겨울"]
seasons.length
>>> 4

for(let i =0; i < seasons.length; i++){
        console.log(seasons[i]);
}

>>>봄
>>>여름
>>>가을
>>>겨울
```


## 07-2 Array 객체의 함수 알아보기
1. concat() 함수 : 기존의 배열에 또 다른 배열이나 값을 합쳐서 새로운 배열을 만드는 함수
      ```
        let nums = ["1", "2", "3"];
        let chars = ["a", "b", "c", "d"];
        
        nums.concat(chars);
        >>> (7) ["1", "2", "3", "a", "b", "c", "d"]     //연결순서 nums -> chars
        chars.concat(nums);
        >>> (7) ["a", "b", "c", "d", "1", "2", "3"]     //연결순서 chars -> nums
      ```

2. join() 함수 : 배열 요소를 연결하는 함수
      ```
      nums.join()       //위의 nums 배열의 요소를 구분기호 없이 연결
      "1,2,3"
      nums.join("-")    //위의 nums 배열의 요소를 구분기호 - 를 사용해 연결
      "1-2-3"
      ```

3. push(), unshift() 함수 : 새로운요소를 추가하는 함수<br>
  -배열의 맨끝에 요소를 추가하려면 push() 함수를 사용<br>
     ```
       nums.push("4", "5");     //위의 nums 배열의 요소의 끝에 "4", "5" 추가
       >>> 5                    // nums 배열의 개수 출력

       nums     
       >>> (5) ["1", "2", "3", "4", "5"]        //nums 배열 확인
     ```
   -배열의 맨 앞에 요소를 추가하려면 unshift() 함수를 사용<br>
     ```
     nums.unshift("0");         //위의 nums 배열의 요소의 맨앞에 "0" 추가
     >>> 6                      //nums 배열의 개수 출력

     nums
     >>> (6) ["0", "1", "2", "3", "4", "5"]     //nums 배열 확인
     ```

4. pop(), shift() 함수 : 배열에서 요소를 추출하는(삭제하는?!) 함수<br>
   -배열의 맨 뒤에 있는 요소를 추출할 떄는 pop() 함수를 사용
     ```
     let study = ["html", "css", "javascript"];
     study.pop();               //배열의 맨 끝 요소를 추출
     >>> "javascript"           //배열의 맨 끝 요소 출력
     
     study
     >>> (2) ["html", "css"]    //study 배열 확인
     ```
   -배열의 맨 앞에 있는 요소를 추출할 때는 shift() 함수를 사용
     ```
     let js = ["es6+", "node", "react", "angular", "vue"];
     js.shift();                //배열의 맨 앞 요소 추출
     >>> "es6+"                 //배열의 맨 앞 요소 출력

     js
     >>> (4) ["node", "react", "angular", "vue"]        //js 배열 확인
     ```
 
 5. splice() 함수: 괄호안에 들어있는 인수에 따라 일정구간의 요소를 삭제하고 새로운 요소를 추가하는 함수<br>
  -인수가 1개일 경우 : 괄호안의 인덱스 숫자 이후로 배열 끝 요소까지 삭제한다.
    ```
    let numbers = [0, 1, 2, 3, 4, 5];
    numbers.splice(2);          //배열의 2번쨰 인덱스부터 배열의 끝까지 삭제
    >>> (4) [2, 3, 4, 5]        //삭제된 요소들 출력

    numbers
    >>> (2) [0, 1]              //numbers 배열 확인
    ```
    -인수가 2개일 경우 : 괄호 안의 첫번째인수는 인덱스값, 두번째인수는 삭제할 개수이다.
    ```
    let study = ["html", "css", "web", "jquery"];
    study.splice(2,1);                  //배열의 2번째인덱스부터 1개의 요소 삭제
    >>> ["web"]                         //삭제된 요소 출력

    study                              
    >>> (3) ["html", "css", "jquery"]   //study 배열 확인
    ```
    -인수가 3개일 경우 : 괄호 안의 첫번째 인수는 인덱스값, 두번쨰 인수는 삭제할 개수, 세번 쨰 인수는 삭제한 위치에 새로 추가할 요소
    ```
    study.splice(2, 1, "js");   //2번째 위치부터 1개를 삭제하고 그위치에 js 추가
    >>> ["jquery"]              //삭제된 요소 출력

    study
    >>> (3) ["html", "css", "js"]       //study 배열 확인
    ```
    -삭제하지 않고 요소만 추가할시엔 두번쨰 인수에 0을 넣는다
    ```
    study.splice(2, 0, "jquery");       //2번째위치에 jquery 추가
    >>> []                              //삭제된 요소 출력 (없기때문에 공백)

    study                                       
    >>> (3) ["html", "css", "jquery", "js"]     //study 배열 확인
    ```
5. slice() 함수 : 원하는 위치의 여러 요소들을 꺼낼 수 있는 함수<br>
   -splice() 함수처럼 인덱스만 지정할 경우 해당 인덱스부터 끝까지 추출한다.
   ```
   let colors = ["red", "green", "blue", "white", "black"];
   colors.slice(2);                     //인덱스 두번째 부터 추출(삭제)
   >>> (3) ["blue", "white", "black"]   //삭제된 요소 출력

   colors                               
   >>> (5) ["red", "green", "blue", "white", "black"]   //colors 배열 확인
   ```
   -시작 인덱스와 끝 인덱스를 지정하여 그사이의 요소들을 추출한다.
   ```
   let colors2 = colors.slcie(1, 4);
   colors2
   >>> (3) ["green", "blue", "white"]
   
   colors
   >>> (5) ["red", "green", "blue", "white", "black"]
   ```

   🔥여기서 중요한것은 -> slice() 함수를 사용할때는 <b>원래 배열은 변경 되지 않는다는것이다.</b>

## 07-3 여행 준비물 점검 프로그램 만들기
-> inddex.html, checklist.js 참고
