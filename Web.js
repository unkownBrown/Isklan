const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    section.classList.add('animate');
    section.addEventListener('mouseover', () => {
        section.classList.add('show');
    });
    section.addEventListener('mouseout', () => {
        section.classList.remove('show');
    });
});