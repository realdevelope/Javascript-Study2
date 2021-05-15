function openPop (){
    let auto = window.open("current.html", "", "width = 300, height = 50");

    if(auto == null){
        alert("팝업이 차단되어있습니다. 팝업차단을 해제하고 새로고침을 눌러주세요")
    }
}
window.onload = openPop;