function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    document.getElementById('grid-container').appendChild(square);
}

function dimensions(number) {
    const container = document.getElementById('grid-container');
    container.style.setProperty('--dimension', number);
    for (i = 0; i < number ** 2; i++) {
        createSquare();
    }
}

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function reset() {
    const container = document.getElementById('grid-container');
    removeGrid(container);
    let userDimension = 0;
    userDimension = prompt('Enter your dimension ', '64');
    dimensions(Math.trunc(userDimension));
}