const inputBox = document.getElementById("box-input")
const listContainer = document.getElementById("list")
function add(){
    if(inputBox.value === ''){
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagname ==="LI"){
        e.target.classList.toggle("check");
    }
    if(e.target.tagname ==="SPAN"){
       e.target.parentElement.remove(); 
    }
}, false);
