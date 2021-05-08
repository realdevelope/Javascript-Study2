let itemList = [];
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(){
    let item = document.querySelector("#item").value;

        if(item != null){
            itemList.push(item);
        
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList(){
    let list = "<ul>";

    for(let i = 0; i < itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id='+ i +'>X</span></li>";
    }
    list += "</ul>"
    document.querySelector("#itemList").innerHTML = list;

    let remove = document.querySelectorAll(".close");

    for(let j = 0; j < remove.length; j++){
        remove[j].addEventListener("click", removeList);
    }
}

function removeList(){
    let id  = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
