// SIDEBAR
var sideMunu = document.querySelector("aside");
var menuBtn = document.querySelector("#menu-btn");
var closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMunu.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    sideMunu.style.display = "none";
})

// LIGHT & DARK THEME-
var themeToggler = document.querySelector(".theme-toggler")

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// FILLING TABLE