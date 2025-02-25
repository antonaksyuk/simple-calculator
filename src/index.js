'use strict';

const display = document.getElementById('display');
const keyboard = document.getElementById('keyboard');

const data = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['AC', '0', '=', '+'],
];

data.forEach((row) => { 
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    
    row.forEach((btn) => {
        const btnElement = document.createElement('button');
        btnElement.classList.add('btn');
        btnElement.innerText = btn;

        if (btn === 'AC') {
            btnElement.classList.add('clear');
        }

        if (btn === '=') {
            btnElement.classList.add('equal');
        }

        if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
            btnElement.classList.add('operator');
        }

        btnElement.addEventListener('click', () => {
            handleButtonClick(btn)
        })
        rowElement.append(btnElement);
    });

    keyboard.append(rowElement)
});

let value = '';
function handleButtonClick(btn) {
    if (btn === '=') {
        try {
            value = eval(value);
            display.innerText = value;
        } catch (error) {
            value = 'Error';
            display.innerText = value;
        }
        } else if (btn === 'AC') {
            value = ''; //problem if push AC '0" on display disappear.
            display.innerText = value;
        } else {
            value += btn
            display.innerText = value
        }
    }

