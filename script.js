const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];

const createDot = () => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(dot);
    dots.push(dot);

    setTimeout(() => {
        dot.remove();
        dots.splice(dots.indexOf(dot), 1);
    }, 2000);
};

setInterval(createDot, 200);

const drawLine = (mouseX, mouseY, dotX, dotY) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(200, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(dotX, dotY);
    ctx.stroke();
};

document.addEventListener('mousemove', (e) => {
    if (dots.length > 0) {
        const dot = dots[0];
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        drawLine(e.clientX, e.clientY, dotX, dotY);

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 100);
    }
});