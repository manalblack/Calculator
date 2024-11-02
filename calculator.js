// this project is added to github
const calcBtn = document.querySelector('.calc-btn');


let DisplayValue = '';

function calcOperator(operator) {
    DisplayValue += operator;
    let display = document.querySelector('.input').value = DisplayValue
}

function calculate() {
    let result = eval(DisplayValue)
    let display = document.querySelector('.input').value = result;
}

function clearBtn() {
    DisplayValue = '';
    let display = document.querySelector('.input').value = '';
}
