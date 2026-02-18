import word  from './main.js';

const input = document.getElementById("inputan");
const kirim = document.getElementById("submit");

input.value = word;
setTimeout(() => {
    kirim.click();
}, 100);