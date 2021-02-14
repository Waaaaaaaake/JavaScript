var btn_plus_id = "btn_plus";
var btn_minus_id = "btn_minus";
var btn_division_id= "btn_division";
var btn_multiply_id = "btn_multiply";


function getNumberValue(id) {
    var numberObj = document.getElementById(id);
    return Number(numberObj.value);
}

function onPlusClick() {
    num1 = getNumberValue('first_number');
    num2 = getNumberValue('second_number');
    console.log(num1 + num2);
}
function onMinusClick() {
    num1 = getNumberValue('first_number');
    num2 = getNumberValue('second_number');
    console.log(num1 - num2);
}
function onMultiplyClick() {
    num1 = getNumberValue('first_number');
    num2 = getNumberValue('second_number');
    console.log(num1 * num2);
}
function onDivisionClick() {
    num1 = getNumberValue('first_number');
    num2 = getNumberValue('second_number');
    console.log(num1 / num2);
}

var plusObj = document.getElementById(btn_plus_id);
var minusObj = document.getElementById(btn_minus_id);
var multiplyObj = document.getElementById(btn_multiply_id);
var divisionObj = document.getElementById(btn_division_id);

plusObj.addEventListener(type="click", listener=onPlusClick);
minusObj.addEventListener(type="click", listener=onMinusClick);
multiplyObj.addEventListener(type="click", listener=onMultiplyClick);
divisionObj.addEventListener(type="click", listener=onDivisionClick);
