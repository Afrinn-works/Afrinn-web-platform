// Declearing Variables
const cursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-link');



//  Mouse Effects
window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove("grow-big");
        link.classList.remove("text-white");
    });
    link.addEventListener('mouseover', () => {
        cursor.classList.add("grow-big");
        link.classList.add("text-white");
    });
})

// // Typed Effects
// var typed = new Typed('.typed-text', {
//     strings: [
//         "WE REIMAGINE SOLUTIONS.",
//         "WE INNOVATIVE SOLUTIONS.", 
//         "WE LOVE GROWTH.",
//         "WE BUILD  TALENTS."
//     ],
//     typeSpeed: 70,
//     loop: true
//   });
  