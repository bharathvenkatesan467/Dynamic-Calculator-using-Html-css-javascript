function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {

        if (['+', '-', '*', '/'].includes(value)) {

            if (['+', '-', '*', '/'].includes(display.innerText.slice(-1))) {
                display.innerText = display.innerText.slice(0, -1) + value;
            } else {
                display.innerText += value;
            }
        } else {
            display.innerText += value;
        }
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {

        const result = new Function('return ' + display.innerText)();

        if (result === Infinity || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch (e) {
        display.innerText = 'Error';
    }
}
