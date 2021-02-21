var btn_plus_id = "btn_plus";
var btn_minus_id = "btn_minus";
var btn_division_id= "btn_division";
var btn_multiply_id = "btn_multiply";

var number1Obj = document.getElementById('first_number');    
var number2Obj = document.getElementById('second_number');

// let buttonPlus = document.getElementById(btn_plus_id);
// let buttonMinus = document.getElementById(btn_minus_id);
// let buttonMultiply = document.getElementById(btn_multiply_id);
// let buttonDivision = document.getElementById(btn_division_id);

let arrayOfButtons = document.getElementsByClassName('operation_button');
// let arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivision];

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

// function onPlusClick() {
//     makeOperation("+");
// }

// function onMinusClick() {
//     makeOperation("-");
// }

// function onMultiplyClick() {
//     makeOperation("*");
// }

// function onDivisionClick() {
//     makeOperation("/");
// }

function onOperationButtonClick(eventObject) {
    var clickedElementInnerHtml = eventObject.currentTarget;
    var operation = clickedElementInnerHtml.innerHTML;
    makeOperation(operation);
}

for(let item of arrayOfButtons) {
    item.addEventListener(type="click", listener=onOperationButtonClick);     
}
// var plusObj = document.getElementById(btn_plus_id);
// var minusObj = document.getElementById(btn_minus_id);
// var multiplyObj = document.getElementById(btn_multiply_id);
// var divisionObj = document.getElementById(btn_division_id);
// 
// plusObj.addEventListener(type="click", listener=onOperationButtonClick);
// minusObj.addEventListener(type="click", listener=onOperationButtonClick);
// multiplyObj.addEventListener(type="click", listener=onOperationButtonClick);
// divisionObj.addEventListener(type="click", listener=onOperationButtonClick);
