let areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach(element => {
    element.addEventListener('dragstart', (e) => {
        e.currentTarget.classList.add('dragging');
    });
    element.addEventListener('dragend', (e) => {
        e.currentTarget.classList.remove('dragging');
    });
});

document.querySelectorAll('.area').forEach(element => {
    element.addEventListener('dragover', (e) => {
        if (e.currentTarget.querySelector('.item') === null) {
            e.preventDefault();
            e.currentTarget.classList.add('hover');
        }
    });

    element.addEventListener('dragleave', (e) => {
        e.currentTarget.classList.remove('hover');
    });

    element.addEventListener('drop', (e) => {
        e.currentTarget.classList.remove('hover');

        if (e.currentTarget.querySelector('.item') === null) {
            let dragItem = document.querySelector('.item.dragging');
            e.currentTarget.appendChild(dragItem);
            updateAreas();
        }
    });
});

document.querySelector('.neutralArea').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
});

document.querySelector('.neutralArea').addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('hover');
});

document.querySelector('.neutralArea').addEventListener('drop', (e) => {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
});

function updateAreas() {
    document.querySelectorAll('.area').forEach(element => {
        let name = element.getAttribute('data-name');

        if (element.querySelector('.item') !== null) {
            areas[name] = element.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');
    }
}