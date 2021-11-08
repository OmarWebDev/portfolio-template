
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    let elements = document.getElementsByClassName("nav-link");
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (anchor.classList.contains('nav-link')) {
            anchor.classList.add('active');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});