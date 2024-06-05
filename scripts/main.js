let list = document.getElementById("playerlist");
let inputBox = document.getElementById("inputBox");
document.getElementById("button").addEventListener("click", function () {
    let li = document.createElement('li');
     li.innerText = inputBox.value;
    list.appendChild(li);
}); 
