function calc( ){
    let currentYear = prompt("올해의 연도를 입력하세요.", "YYYY");
    let birthYear = prompt("태어난 연도를 입력하세요.", "YYYY");
    let age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세 입니다.";
}