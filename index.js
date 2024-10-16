let display = document.getElementById("display");

function add(value) {
    console.log(display)
        display.value += value;
}

function clear() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    }
    catch (error) {
        console.error('Error:', error);
        display.value = 'Error';
    }
}