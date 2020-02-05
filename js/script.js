/* eslint-disable no-eval */
/* eslint-disable no-new-wrappers */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// document.write('Hello World')

function input(i) {
    const inputCalc = document.querySelector('.account');

    inputCalc.value += i;
}

function result() {
    const inputCalc = document.querySelector('.account');
    const resultCalc = document.querySelector('.result');

    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}
