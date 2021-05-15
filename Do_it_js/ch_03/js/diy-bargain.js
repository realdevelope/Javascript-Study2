function showPrice() {
    let originPrice = document.querySelector("#oPrice").value;  
    let rate = document.querySelector("#rate").value;   
    
    if(originPrice > 0 && rate > 0){
        var savedPrice = originPrice * (rate/100);  
        var resultPrice = originPrice - savedPrice;
    }
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은" + originPrice + "원이고, 학인율은" + rate + "%입니다." + savedPrice + "원을 절약한" + resultPrice + "원에 살 수 있습니다.";	
}