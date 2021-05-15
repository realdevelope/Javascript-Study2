/*
[마무리 실습1] - 며칠 만났는지 계산하기
*/

//2
let now = new Date();
console.log(Date());
let firstDay = new Date("2014-10-01");
console.log(Date());

//3
let toNow = now.getTime();
console.log(toNow);
let toFirst = firstDay.getTime();
console.log(toFirst);

//4
let PassedTime = toNow - toFirst;
console.log(PassedTime);
let PassedDay = Math.round(PassedTime/(1000 * 60 * 60 * 24));
console.log(PassedDay);

document.querySelector("#accent").innerText = PassedDay + "일";

calcDate = function(days){
    let future = toFirst + days * (1000 * 60 * 60 * 24);
    let someday = new Date(future);

    let year = someday.getFullYear();
    let month = someday.getMonth() +1;
    let date = someday.getDate();

    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);