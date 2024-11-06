$(document).ready(function(){

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
    });
    
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    
    hamburger.addEventListener('click' , function(){
        mobileNav.classList.add('open');
    });
    
    times.addEventListener('click' , function(){
        mobileNav.classList.remove('open');
    });
    });