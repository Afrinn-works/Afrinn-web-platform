// Declearing Variables
const cursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-link');
let typed1 = document.querySelector('.typed-1');
let typed2 = document.querySelector('.typed-2');
// let textDiv = document.querySelector('.change-text');

const tops = [
    "REIMAGINE",
    "INNOVATIVE",
    "LOVE",
    "BUILD"
];
const bottom = [
    "Solutions",
    "Solutions",
    "Growth",
    "Talents"
]

const changingP = [
    "Design should solve problems, be innovative, functional, simple and human centered..",
    "Modern design need to be easy to use and solution driven.",
    "We believe in improvement, that’s why we give designers the space to grow.",
    "Talents are to be cordinated and channel to yeild excelent results"
]


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

let textWrapper = document.querySelectorAll('.ml1 .letters');
textWrapper.forEach(textWrapper => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
