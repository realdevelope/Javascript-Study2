function showPrice() {
    let originPrice = 10000;
    let rate = 25;
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, 할인율은 " + rate + "%입니다.";
}