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
        // getOutput().value = getFormattedNumber(num);
        getOutput().value = num;
    }
}

function getFormattedNumber(num) {
    if (num === "-") {
        return "";
    }
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

function appendNumber(expression, id) {
    if (id === '.' && expression.includes('.')) return expression;
    if (id === '.' && expression.length === 0) return expression + '0' + id;
    // if (id === '0' && !expression.includes('.') && expression.length === 1) return expression;
    return expression + id;
}

function operator(id) {
    var output = getOutput().value;
    var history = getHistory().value;

    if (output === "" && history !== "") {
        if (isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
        }
    }

    if (output !== "" || history !== "") {
        // output = (output === "") ? output : reverseNumberFormat(output);
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
    // var output = reverseNumberFormat(getOutput().value);
    var output = getOutput().value;
    if (output !== NaN && output.length < 6) {
        // output += num;
        output = appendNumber(output, num);
        setOutput(output);
    }
}

function backspace() {
    // var output = reverseNumberFormat(getOutput().value).toString();
    var output = getOutput().value;
    if (output) {
        output = output.substr(0, output.length - 1);
        setOutput(output);
    }
}
