const btnPlus = document.querySelector('button[data-plus]');
const btnMinus = document.querySelector('button[data-minus]');
const btnMult = document.querySelector('button[data-multiply]');
const btnDiv = document.querySelector('button[data-divide]');
const btnClear = document.querySelector('button[data-clear]');
const valueInput1 = document.querySelector('input[data-value1]');
const valueInput2 = document.querySelector('input[data-value2]');
const outputEl = document.querySelector('span[data-result]');
let total = 0;
btnPlus.addEventListener('click', function () {
    const value1 = Number(valueInput1.value);
    const value2 = Number(valueInput2.value);
    total = value1 + value2;
    outputEl.textContent = total
    valueInput1.value = '';
    valueInput2.value = '';

})
btnClear.addEventListener('click', function () {
    outputEl.textContent = 0;
    total = 0;
})
btnMinus.addEventListener('click', function () {
    const value1 = Number(valueInput1.value);
    const value2 = Number(valueInput2.value);
    total = value1 - value2;
    outputEl.textContent = total
    valueInput1.value = '';
    valueInput2.value = '';
})
btnMult.addEventListener('click', function () {
    const value1 = Number(valueInput1.value);
    const value2 = Number(valueInput2.value);
    total = value1 * value2;
    outputEl.textContent = total
    valueInput1.value = '';
    valueInput2.value = '';
})
btnDiv.addEventListener('click', function () {
    const value1 = Number(valueInput1.value);
    const value2 = Number(valueInput2.value);
    total = value1 / value2;
    outputEl.textContent = total
    valueInput1.value = '';
    valueInput2.value = '';
})