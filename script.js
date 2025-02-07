const circle = document.querySelector('.circle');
const trailContainer = document.querySelector('body');


function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    trailContainer.appendChild(trail);


    setTimeout(() => trail.remove(), 100);
}

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    circle.style.transform = `translate(${x}px, ${y}px)`;

   
    createTrail(x, y);
});
