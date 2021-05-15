let nameInfo = document.querySelector("#billingName");
let tellInfo = document.querySelector("#billingTel");
let addrInfo = document.querySelector("#billingAddr");

let check = document.querySelector("#shippingInfo");
check.addEventListener("click", change);

function change(){
    if(check.checked == true){
        document.querySelector("#shippingName").value
        = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value
        = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value
        = document.querySelector("#billingAddr").value;
    }
    else{
        document.querySelector("#shippingName").value ="";
        document.querySelector("#shippingTel").value ="";
        document.querySelector("#shippingAddr").value ="";
    }
}