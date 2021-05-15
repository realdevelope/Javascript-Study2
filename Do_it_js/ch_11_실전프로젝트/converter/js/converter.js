let sUnit = document.querySelector("#s-unit");  //왼쪽 필드의 단위
let tUnit = document.querySelector("#t-unit");  //오른쪽 필드의 단위
let cTof = true;    //섭씨에서 화씨로 변환????ㅠㅠ

let sourse = document.querySelector("#s-value");    //왼쪽 텍스트 필드
let target = document.querySelector("#t-value");    //오른쪽 텍스트 필드

function exUnit(){
    sourse.value = "";  //왼쪽 텍스트값 지우기
    target.value = "";  // 오른쪽    ''

    if(cTof){   
        cTof = false;   //섭씨에서 화씨로 변환   
        sUnit.innerHTML = "&#8457;";    //왼쪽 필드에 화씨
        tUnit.innerHTML = "&#8451;";    //오른쪽 필드에 섭씨
    }
    else{
        cTof = true;
        sUnit.innerHTML = "&#8451;";   //왼쪽 필드에 섭씨
        tUnit.innerHTML = "&#8457;";   //오른쪽 필드에 화씨
    }
}

function converter(){
    if(cTof){
        target.value = (sourse.value * 1.8 + 32).toFixed(2);     //섭씨 -> 회씨 계산(반올림 소수점 둘쨰자리까지)
    }
    else{
        target.value = ((sourse.value - 32) / 1.8).toFixed(2)    //화씨 - > 섭씨 계산(반올림 소수점 둘쨰자리까지)
    }
}