/*
<작업순서>
1. 오늘 날짜 Date 객체 만들기
   처음 만난날 Date 객체 만들기
2. 오늘 날짜 밀리초로 바꾸기
   처음 만난날 밀리초로 바꾸기
3. 두 밀리초 차이 계산하기
4. 결과값을 날짜수 로 바꾸기
5. 화면에 표시하기
*/

//1
let now = new Date();
let firstDay = new Date("2014-10-02");

//2
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;

//3
let passedDay = Math.round(passedTime/ (1000 * 60 * 60 * 24));  //1일 = 24시간 * 60분 * 60초 * 1000밀리초
                                                                //round : Math객체의 반올림하는 함수
//4
document.querySelector("#accent").innerHTML = passedDay + "일";


/*
calcDate() 함수 로 날짜 계산하기
*/
function calcDate(days){
    //100일 후 날짜 계산
    let future = toFirst + days * (1000 * 60 * 60 * 24); //처음만난날에 100일 더하기
    let someday = new Date(future);

    let year = someday.getFullYear();
    let month = someday.getMonth() + 1;
    let date = someday.getDate();

    document.querySelector("#date" + days).innerHTML = year + "년" + month + "월" + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

/*
//200일 후 날짜 계산
future = toFirst + 200 * (1000 * 60 * 60 * 24); //처음만난날에 200일 더하기
someday = new Date(future);

year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();

document.querySelector("#date200").innerHTML = year + "년" + month + "월" + date + "일";
*/

