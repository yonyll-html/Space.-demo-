const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

if (button1) {
    button1.addEventListener('click', () => {
        window.location.href = './pros.html';
    });
}

if (button2) {
    button2.addEventListener('click', () => {
        window.location.href = './air.html';
    });
}

if (button3) {
    button3.addEventListener('click', () => {
        window.location.href = './base.html';
    });
}

if (button4) {
    button4.addEventListener('click', () => {
        window.location.href = './sixe.html';
    });
}