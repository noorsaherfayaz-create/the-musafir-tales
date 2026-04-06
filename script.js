// =======================
// Hamburger / Sidebar
// =======================
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// =======================
// Hero buttons scroll
// =======================
const heroButtons = document.querySelectorAll('.hero-btn');
heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.target);
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// =======================
// Sliders (categories + top destinations)
// =======================
const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(container => {
    const slider = container.querySelector('.slider');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');

    if(!slider || !prev || !next) return;

    // width of one card + margin
    const slideWidth = () => slider.children[0].offsetWidth + 15;

    // Buttons
    next.addEventListener('click', () => {
        slider.scrollBy({ left: slideWidth(), behavior: 'smooth' });
    });
    prev.addEventListener('click', () => {
        slider.scrollBy({ left: -slideWidth(), behavior: 'smooth' });
    });

    // Optional: drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);

    slider.addEventListener('mousemove', e => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});