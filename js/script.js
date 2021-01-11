
//menu settings
const menuPoints = document.querySelectorAll('.menu');
const publicationsBlock = document.querySelectorAll('.publications');

const nextButton = document.querySelectorAll('.next-button');
const prevButton = document.querySelectorAll('.prev-button');

let activeArticles = '';
let count = 0;

function accent() {
    let data = this.getAttribute('data');

    this.classList.add('accent');
    this.style.width = '1500px';

    for (let item of menuPoints) {
        if (item.classList.contains('accent') == false) {
            item.classList.add('hidden');
            setTimeout(() => {
                item.classList.add('hide');
            }, 400);
        }
    }

    for (let item of publicationsBlock) {
        if (item.getAttribute('id') == data) {
            item.classList.remove('hide');
            activeArticles = item.querySelectorAll('.article');
        }
    }

    //publications settings

    function nextBlock() {
        this.style.backgroundColor = '#D1C4E9';
        this.onmouseup = () => {
            this.style.backgroundColor = '#673AB7';
        }
        count++;

        if (count > activeArticles.length - 1) {
            count = 0;
        }

        for (let item of activeArticles) {
            item.classList.add('slide-animation-left');
            item.classList.add('hidden');
            setTimeout(() => {
                item.classList.add('hide');
            }, 500);
        }

        setTimeout(() => {
            activeArticles[count].classList.remove('slide-animation-right');
            activeArticles[count].classList.remove('slide-animation-left');
            activeArticles[count].classList.remove('hide');
        }, 500);
        setTimeout(() => {
            activeArticles[count].classList.remove('hidden');
        }, 600);
    }

    for (let item of nextButton) {
        if (item.getAttribute('data') == data) {
            item.onmousedown = nextBlock;
        }
    }


    function prevBlock() {
        this.style.backgroundColor = '#D1C4E9';
        this.onmouseup = () => {
            this.style.backgroundColor = '#673AB7';
        }
        count--;

        if (count < 0) {
            count = activeArticles.length - 1;
        }

        for (let item of activeArticles) {
            item.classList.add('slide-animation-right');
            item.classList.add('hidden');
            setTimeout(() => {
                item.classList.add('hide');
            }, 500);
        }

        setTimeout(() => {
            activeArticles[count].classList.remove('slide-animation-right');
            activeArticles[count].classList.remove('slide-animation-left');
            activeArticles[count].classList.remove('hide');
        }, 500);
        setTimeout(() => {
            activeArticles[count].classList.remove('hidden');
        }, 600);
    }

    for (let item of prevButton) {
        if (item.getAttribute('data') == data) {
            item.onmousedown = prevBlock;
        }
    }

}

for (let item of menuPoints) {
    item.addEventListener('mousedown', accent);
}