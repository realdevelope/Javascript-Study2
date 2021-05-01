let n = prompt("숫자를 입력하세요.");
let nFact =1;
let i = 2;

while(i <= n){
    nFact *= i;
    i++;
}
document.write(n + "!=" + nFact);5
