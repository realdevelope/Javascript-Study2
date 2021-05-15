let changes = document.querySelectorAll(".check");

for(let i = 0; i < changes.length; i++){
    changes[i].addEventListener("click",function(){
        this.parentNode.style.color = "#ccc";
    });
}