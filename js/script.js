// グローバルナビゲーション
// const globalNav = document.querySelector('.l-header__nav');
const globalNavBtn = document.querySelector('.l-header__navBtn');
const globalNavCloseBtn = document.querySelector('.l-header__navClose');

globalNavBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});

globalNavCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('is-open');
});




// FAQアコーディオン

const faqBtn = document.querySelectorAll('.p-faq__listItem');

console.log(faqBtn);

faqBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('answer-open');
    });
    // console.log(btn);
});

