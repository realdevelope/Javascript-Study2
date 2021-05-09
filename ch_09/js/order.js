let check =  document.querySelector("#shippingInfo");

check.addEventListener("click", function(){
    if(check.checked == true){  //체크될시
        document.querySelector("#shippingName").value 
        = document.querySelector("#billingName").value; //주문정보의 이름을 배송 정보의 이름에 복사
        document.querySelector("#shippingTel").value
        = document.querySelector("#billingTel").value;  //주문정보의 연락처를 배송 정보의 연락처에 복사
        document.querySelector("#shippingAddr").value
        = document.querySelector("#billingAddr").value;  //주문저옵의 연락처를 배송정보의 연락처에 복사
    }
    else{   //체크가 해제될시 배송필드를 지움
        document.querySelector("#shippingName").value = ""; 
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});