let toyRobot = {
    productId : "123-12",
    name : "Robot",
    price : "25,000",
    medeIn : "Korea",
    quantity : 10,
    showStock : function(){
        document.querySelector("#display").innerHTML = this.name + " 제품은" + this.quantity + "개 남았습니다.";
    },      //여기에서 this는 함수르 포함하는 현재 객체(toyRobot)을 가리킴
    showPrice :function(){
        alert(this.name + "제품의 가격은 " + this.price + "입니다.");
    }
};

toyRobot.showStock();
toyRobot.showPrice();
