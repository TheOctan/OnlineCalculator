/* eslint-disable use-isnan */
/* eslint-disable no-eval */
/* eslint-disable no-new-wrappers */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// const empty = '0,00';

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
    setHistory("");
    setOutput("");
}

function operator(id) {
    var output = getOutput().value;
    var history = getHistory().value;

    if (output !== "") {
        output = reverseNumberFormat(output);
        history += output;

        if (id === '=') {
            var result = eval(history);
            setOutput(result);
            setHistory("");
        } else {
            history += id;
            setHistory(history);
            setOutput("");
        }
    }
}

function number(num) {
    var output = reverseNumberFormat(getOutput().value);
    if (output !== NaN) {
        output += num;
        setOutput(output);
    }
}

function result() {
}

function backspace() {
    var output = reverseNumberFormat(getOutput().value).toString();
    if (output) {
        output = output.substr(0, output.length - 1);
        setOutput(output);
    }
}
