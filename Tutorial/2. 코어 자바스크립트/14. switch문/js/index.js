/*
    과제1 - switch 문을 if 문으로 변환하기
*/ 
//switch
switch (browser) {
    case 'Edge':
      alert( "Edge를 사용하고 계시네요!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
      break;
  
    default:
      alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
  }

  //if
  if(browser == "Edge"){
      alert("Edge 를 사용하고 계시네요!");
  }
  else if(browser == "Chorme" || browser == "Firefox" || browser == "Safari" || browser == "Opera" ){
      alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
  }
  else{
      alert("현재 페이지가 괜찮아 보이길 바랍니다!");
  }



/*
  과제2 - if 문을 switch 문으로 변환하기
*/
//switch
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

//if
let a = +prompt("a?", "");

switch(a){
    case 0 :
        alert(0);
        break;
    case 1 :
        alert(1);
        break;
    case 2 || 3 :
        alert("2,3");
        break;
}




