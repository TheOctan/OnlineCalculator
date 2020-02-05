/* eslint-disable no-eval */
/* eslint-disable no-new-wrappers */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const empty = '0,00';

function getHistory() {
    return document.querySelector('.history');
}

function setHistory(num) {
    getHistory().value = num;
}

function getOutput() {
    return document.querySelector('.output');
}

function setOutput(num) {
    if (num === "") {
        getOutput().value = num;
    } else {
        getOutput().value = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

function reset() {

}

function operator(id) {
    alert(id);
}

function number(num) {
    alert(num);
}

function result() {
}

function backspace() {

}
