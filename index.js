//Random Number Generator   

const myButton = document.getElementById("buttonID");
const myLabel = document.getElementById("myLabel")

const max = 6;
const min=1;
let randomNumber;

myButton.onclick = function(){
    randomNumber = Math.floor(Math.random()*max)+min ;
    myLabel.textContent = randomNumber
}

