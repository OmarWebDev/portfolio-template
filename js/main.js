// Smooth Scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     let elements = document.getElementsByClassName("nav-link");

//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].classList.remove("active");
//         }
//         if (anchor.classList.contains('nav-link')) {
//             anchor.classList.add('active');
//         }
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'

//         });
//     });
// });
window.onload = function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 122
        }, 500);
    });
};
