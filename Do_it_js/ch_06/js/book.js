/*객체생성*/
function Book(title, author, volume, price){
    this.title = title;     //제목
    this.author = author;   //저자
    this.volume = volume;   //분량
    this.price = price;     //가격
}   

/*인스턴스*/
let html = new Book("웹 표준의 정석", "ko", "608", "28,000");   
let youtube = new Book("유튜브 영상만들기", "Kim", "368", "16,000");
let python = new Book("점프 투 파이썬", "Park", "352", "18,800");

let bookList = [html, youtube, python];

document.write("책 제목으로 살펴보기");
for(let i = 0; i < bookList.length ; i++){
    document.write("<p>" + bookList[i].title + "</p>");
}
