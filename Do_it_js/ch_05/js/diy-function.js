function add (a, b){
    let sum = a + b;
    return sum;
}

let num1 = parseInt(prompt("첫번쨰 숫자를 입력하세요"));    //parseInt 중요!!!
let num2 = parseInt(prompt("두번째 숫자를 입력하세요"));
let result = add(num1, num2);

document.write("두수를 더한 값은 " + result + " 입니다.");

