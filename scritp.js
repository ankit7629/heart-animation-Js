const body = document.querySelector('body');

body.addEventListener('mouseover', (e) => {
    const xp = e.clientX;
    const yp = e.clientY;
    const heart = document.createElement('span');
    heart.style.left = `${xp}px`;
    heart.style.top = `${yp}px`;
    
    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000)
})