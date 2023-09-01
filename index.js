
/* Intro animation */
let intro = document.querySelector('.intro-bg');
let line = document.querySelector('.line-1');
let title = document.querySelector('.title');
let text = document.querySelector('.intro-para')

$(document).ready(function(){
    $(this).scrollTop(0);
});

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        // Fixscreen 
        document.getElementsByTagName("body")[0].classList.add('fix-screen')
        title.style.color = 'white'

        // Title - appears
        setTimeout(() => {
            title.style.zIndex = 1
            line.style.borderRight = 'black'
        }, 3400)

        // Fixscreen - remove
        setTimeout(() => {
            document.getElementsByTagName("body")[0].classList.remove('fix-screen')
        }, 4200)

        // Code - remove
        setTimeout(() => {
            line.style.opacity = 0
        }, 4400)

        setTimeout(() => {
            title.classList.add('post-title')
            text.style.opacity = 1
            intro.style.opacity = 0
            intro.style.zIndex = -1
        }, 4600)

    })
});

/* Scroll to top after page refresh */
$(window).scroll(function() {

    if ($(this).scrollTop() < 550) {
       $('nav').stop().fadeIn(400); 
   } else {$('nav').stop().fadeOut(400);
    };
});   

/* Menu */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Toggle Nav off
    nav.addEventListener('click', () => {
        if(document.querySelector('.nav-active')) {
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
            }
        });
};

navSlide()













