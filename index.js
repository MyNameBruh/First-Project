document.addEventListener('DOMContentLoaded', Initialize);

var Input1;
var Input2;
var EntBtn;

function Initialize() {
    Input1 = document.getElementById('input1');
    Input2 = document.getElementById('input2');
    EntBtn = document.getElementById('Enter');
    EntBtn.addEventListener('click', Print);
}

function Print() {
    var InputVals = Input1.value + "+" + Input2.value;
    console.log(eval(InputVals));
}
