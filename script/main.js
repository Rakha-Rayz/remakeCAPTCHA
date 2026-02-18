// Main.js
// By Rakhaa

// Module
import { kata, randomChoices } from "./random.js";

// Dom & Variable
const teks = document.getElementById("text");
const input = document.getElementById("inputan");
const kirim = document.getElementById("submit");
const acaq = document.getElementById("acak");
const output = document.getElementById("Output");
const vervi = document.getElementById("verivikasi");
let word = randomChoices(kata);

// Convert text to word
function ubah() {
    teks.textContent = word;
}
ubah();

// Shuffle
function acakk() {
    word = randomChoices(kata);
    teks.textContent = word;
}
acaq.addEventListener("click", acakk);

// Check
let startTime = Date.now();

kirim.addEventListener("click", () => {
    const waktu = (Date.now() - startTime) / 1000;

    const databenar = input.value === word;
    const terlaluCepat = waktu < 1;

    if (databenar && !terlaluCepat) {
        output.textContent = "Selamat anda manusia";
        vervi.textContent = "manusia";
    } else if (!databenar) {
        output.textContent = "Sepertinya anda salah memasukan kata";
    } else {
        output.textContent = "Anda adalah bot";
        vervi.textContent = "Bot";
    }
});

// Export module for active the bot
// export default word;