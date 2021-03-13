// typing effect
window.onload = function() {
    var typed = new Typed('#typed', {
        strings: ["Programmer", "Web Developer", "Mobile Developer", "VJTian :)"],
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 35,
        loop: true,
    });
};

// smooth scrolling
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 10
});