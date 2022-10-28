document.addEventListener('DOMContentLoaded', Initialize);

var Input1;
var EntBtn;

function Initialize() {
    Input1 = document.getElementById('input1');
    EntBtn = document.getElementById('Enter');
    EntBtn.addEventListener('click', Print);
}

function Print() {
    alert(Input1.value);
}
