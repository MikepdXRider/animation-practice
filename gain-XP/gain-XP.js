const xpButtonEl = document.getElementById('xp-button');
const imgEl = document.querySelector('.img');
const xpEL = document.querySelector('.xp');

xpButtonEl.addEventListener('click', () => {
    imgEl.style.display = 'none';
    xpEL.style.display = 'block';
    xpEL.classList.add('gain-XP');
});