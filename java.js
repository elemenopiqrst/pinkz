document.addEventListener('DOMContentLoaded', function () {
    const mouseTrail = document.querySelector('.mouse-trail');

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        mouseTrail.style.transform = `translate(${x}px, ${y}px)`;
    });
});


