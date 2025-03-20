document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    
    document.querySelector(".next-btn").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    });

    document.querySelector(".prev-btn").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
    });
});