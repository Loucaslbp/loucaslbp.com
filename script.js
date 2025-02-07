const circle = document.querySelector('.circle');
const trailContainer = document.querySelector('body');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        circle.style.transform = `translate(${x}px, ${y}px)`;
        createTrail(x, y);
    });
} else {
    circle.remove();
}

function createTrail(x, y) {
    if (isTouchDevice) return;

    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    trailContainer.appendChild(trail);
    setTimeout(() => trail.remove(), 100);
}
