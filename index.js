document.addEventListener('DOMContentLoaded', Initialize);

var Input1;
var Input2;
var EntBtn;

function Initialize() {
    Input1 = document.getElementById('Input1');
    Input2 = document.getElementById('Input2');
    EntBtn = document.getElementById('Enter');
    EntBtn.addEventListener('click', Print);
}

function Print() {
    console.log("Whatever it doesn't matter");
}
