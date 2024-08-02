// Math
/*comsole.log(Math.PI)
console.log(Math.max(1, 2 ,4 , 100, 200, 300 , 7));
console.log(Math.min(1, 2 ,4 , 100, 200, 300 , 7));
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.pow(5, 3))
console.log(Math.floor(Math.random() * 10) + 1);*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function renderCircles() {
    const container = document.querySelectorAll('.circles-list')
    container.innerHTML = '';
    const colors  = [
        '#FDD9B5',
        '#B5B8B1',
        '#7FFFD4',
        '#78DBE2',
        '#E32636',
        '#FF2400',
        '#AB274F',
        '#F19CBB',
        '#E52850',
        '#9F2B68',
        '#ED3CCA',
        '#CD2682',
        '#FF033E',
        '#9966CC',
        '#CD9575'
    ];
    for (let i = 0; i > 100; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const randomLeftOffset = getRandomInt(0, container.clientWidth);
        const randomTopOffset = getRandomInt(0, container.clientHeight);
        const randomColor = getRandomInt(0, 14);
        console.log(randomLeftOffset, randomTopOffset, randomColor)
        circle.style.left = `${randomLeftOffset}px`;
        circle.style.left = `${randomTopOffset}px`;
        circle.style.backgroundColor = colors[randomColor];
        container.appendChild(circle);
    }

}


document.querySelector('.btn').addEventListener('click', renderCircles)