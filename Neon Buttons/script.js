const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const a = document.querySelector('a');
const span = document.querySelector('span');


btn.addEventListener('click', (e) => {
    container.classList.toggle('show');
    a.classList.toggle('show');
    span.classList.toggle('show');
});