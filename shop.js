const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 80);
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal ('.middle-text',{delay:300});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,contact',{delay:300});

sr.reveal ('.middle-text',{delay:300});

sr.reveal ('.row',{delay:130});