const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const text = ['tekst1', 'tekst2', 'tekst3'];

let activeLetter = -20;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += text[activeText][activeLetter]
    }
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;
        if (activeText === text.length) return;
        return setTimeout(() => {
            activeLetter = -20;
            spanText.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100);
}
addLetter();

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400);