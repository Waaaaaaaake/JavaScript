var btn_plus_id = "btn_plus";
var btn_minus_id = "btn_minus";
var btn_division_id= "btn_division";
var btn_multiply_id = "btn_multiply";

var number1Obj = document.getElementById('first_number');    
var number2Obj = document.getElementById('second_number');

function makeOperation(operation) {
    num1 = Number(number1Obj.value);
    num2 = Number(number2Obj.value);
    switch (operation) {
        case "+": 
            window.alert(num1 + num2);
            break;
        case "-":
            window.alert(num1 - num2);
            break;
        case "*":
            window.alert(num1 * num2);
            break;
        case "/":
            window.alert(num1 / num2);
            break;
        default:
            break;
    }
}

function onPlusClick() {
    makeOperation("+");
}

function onMinusClick() {
    makeOperation("-");
}

function onMultiplyClick() {
    makeOperation("*");
}

function onDivisionClick() {
    makeOperation("/");
}

var plusObj = document.getElementById(btn_plus_id);
var minusObj = document.getElementById(btn_minus_id);
var multiplyObj = document.getElementById(btn_multiply_id);
var divisionObj = document.getElementById(btn_division_id);

plusObj.addEventListener(type="click", listener=onPlusClick);
minusObj.addEventListener(type="click", listener=onMinusClick);
multiplyObj.addEventListener(type="click", listener=onMultiplyClick);
divisionObj.addEventListener(type="click", listener=onDivisionClick);
