let list = document.getElementById("memorylist");
let inputBox = document.getElementById("inputBox");

document.getElementById("addButton").addEventListener("click", function () {
    let li = document.createElement('li');
    if (inputBox.value.toLowerCase().includes("yellow hat")){
        let anchorLink = document.createElement("a");
        anchorLink.href = "yellow_hat.html";
        anchorLink.innerText = inputBox.value;
        li.appendChild(anchorLink);
        list.appendChild(li);
    } else {
        li.innerText = inputBox.value;
        list.appendChild(li);
    }
}); 
