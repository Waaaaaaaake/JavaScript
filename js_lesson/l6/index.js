// есть объект window это всё окно которое видно нам при загрузке
// window.alert('ыыы');
// есть объект document, который загружается в окно

/*
var helloMessage;
var vvvObject;
helloMessage = document.getElementById('name_input_id').value;
vvvObject = document.getElementById('вввв').value;

window.alert(helloMessage);
window.alert(vvvObject);
*/


function addErrorClass(id) {
    var element = document.getElementById(id)
    element.className = "error-input";
    // el2.name = "error-input";
}

function addNonErrorClass(id) {
    var element = document.getElementById(id)
    element.className = id;
    // el2.name = "error-input";
}

function addErrorClassToAllInput() {
    // ручная точка останова
    // debugger;
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

function onButtonClickLastNameListener() {
    addErrorClass('last-name');
}
let onFirstNameKeyUp = () => addErrorClass('first-name');
let onFirstNameKeyDown = () => addNonErrorClass('first-name');

let buttonClick = ()  => window.alert('Click!!');

var buttonId = 'button'
var firstNameId = 'first-name'

var buttonObj = document.getElementById(buttonId);
var firstNameObj = document.getElementById(firstNameId);

// ставим алерт на событие нажатия по кнопке 
// buttonObj.addEventListener(type="click", listener=buttonClick);

// ставим всем кнопкам сразу стиль по клику
// buttonObj.addEventListener("click", addErrorClassToAllInput);

// захотели поставить определенной кнопке стиль
buttonObj.addEventListener(type="click", listener=onButtonClickLastNameListener);

// добавляем два события "В момент ввода в поле" и "В момент прекращения ввода"
firstNameObj.addEventListener(type="keydown", onFirstNameKeyUp);
firstNameObj.addEventListener(type="keyup", onFirstNameKeyDown);

// ставим стили по таймауту
// window.setTimeout(addErrorClassToAllInput, 2000)
// addErrorClassToAllInput();