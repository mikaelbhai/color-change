const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6', '#F6FF33', '#B833FF', '#FF5733', '#8DFF33',
    '#33FFB5', '#33A1FF', '#5733FF', '#FFB533', '#33FFF6', '#FF33A1', '#A133FF', '#33FF8D', '#FF5733',
    '#57FF33', '#33FF33', '#A1FF33', '#F633FF', '#FF338D', '#FF5733', '#FF8D33', '#33FFA1', '#33A1FF',
    '#F6FF33', '#B533FF', '#5733FF', '#33FF57', '#33FFF6', '#FF33B5', '#57FF33', '#FFB533', '#33A1FF',
    '#FF33F6', '#A1FF33', '#33FF33', '#FF5733', '#8D33FF', '#33FFB5', '#F6FF33', '#B533FF', '#FF33A1',
    '#33FFA1', '#A1FF33', '#33FF8D', '#FFB533', '#F6FF33'
];

let currentIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('click', changeColor);
