//.removeEventListener
let createBoxBtn = document.getElementById("createBoxBtn");
let stopBoxesBtn = document.getElementById("stopBoxesBtn");
let boxCtn = document.getElementById("boxCtn");

createBoxBtn.addEventListener('click', createBox);

stopBoxesBtn.addEventListener('click', () => {
    createBoxBtn.removeEventListener('click', createBox);
    alert("Excelente, confirmados los lugares!")
});

function createBox (){
    let box = document.createElement('div');
    box.classList.add('square');
    boxCtn.appendChild(box);
    

}

//elimino las cajas
deleteBoxesBtn.addEventListener("click",()=>{

    boxCtn.innerHTML = "" ;



})