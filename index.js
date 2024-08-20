// Intersection Observer to handle the scaling effect
const items = document.querySelectorAll('.content-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.5
});

items.forEach(item => {
    observer.observe(item);
});
