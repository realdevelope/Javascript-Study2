let r = prompt("원의 반지름은? (cm)");
let _circle = new Circle(r);

document.write("반지름이 " + r + "cm일 때 <br>" + "원의 둘레 : 약 " + _circle.circumference() + "cm <br>원의 넓이 : 약 " + _circle.area()+"cm<sup>2</sup>");	

function Circle(radius) {
    this.radius = radius,
    this.circumference = function() {
        return Math.floor(this.radius * 2 * Math.PI);
    }

    this.area = function() {
        return Math.floor(Math.pow(this.radius, 2) * Math.PI);
    }
};