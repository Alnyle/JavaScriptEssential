const length = document.getElementById('length');
const width = document.getElementById('width');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
let l;
let w;
let area;
const printResult = (e) => {

    if (length.value === '' || width.value === '') {
        result.textContent = 'Please fill both field inputs';
        return;
    }

    l = parseFloat(length.value);
    w = parseFloat(width.value);
    area = l * w;

    result.textContent = area;
}

btn.addEventListener('click', printResult)
