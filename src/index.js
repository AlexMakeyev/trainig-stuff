const btnPlus = document.querySelector('button[data-plus]');
const btnMinus = document.querySelector('button[data-minus]');
const btnMult = document.querySelector('button[data-multiply]');
const btnDiv = document.querySelector('button[data-divide]');
const btnClear = document.querySelector('button[data-clear]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('span[data-result]');
let total = 0;
btnPlus.addEventListener('click', function () {
    const value = Number(valueInput.value);
    console.log(value);
    total += value;
    outputEl.textContent = total
    valueInput.value = '';

})
btnClear.addEventListener('click', function () {
    outputEl.textContent = 0;
    total = 0;
})
btnMinus.addEventListener('click', function () {
    const value = Number(valueInput.value);
    console.log(value);
    total -= value;
    outputEl.textContent = total
    valueInput.value = '';

})
btnMult.addEventListener('click', function () {
    const value = Number(valueInput.value);
    console.log(value);
    total = total * value;
    outputEl.textContent = total
    valueInput.value = '';

})
btnDiv.addEventListener('click', function () {
    const value = Number(valueInput.value);
    console.log(value);
    total = total / value;
    outputEl.textContent = total
    valueInput.value = '';

})