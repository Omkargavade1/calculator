const display = document.getElementById('display');

let isResult = false;

function appendToDisplay(value) {
    if (isResult) {
        display.value = (value === '.' || isNaN(value)) ? '0' + value : value;
        isResult = false;
        return;
    }
    
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
    isResult = false;
}

function deleteLast() {
    if (isResult) {
        clearDisplay();
        return;
    }
    display.value = display.value.slice(0, -1);

    if (display.value === '') {
        display.value = '';
    }
}

function calculate() {
    try {
        let result = eval(display.value);

        if (typeof result === 'number' && result.toString().includes('.') && result.toString().split('.')[1].length > 10) {
             result = result.toFixed(10).replace(/\.?0+$/, '');
        }
        display.value = result;
        isResult = true; 

    } catch (e) {
        display.value = 'Error';
        isResult = true;
    }
}
