window.addEventListener('DOMContentLoaded', function () {

    // -----------load-----------

    const $heroTitle = document.querySelector('.hero__title');
    const $heroBtn = document.querySelector('.hero__btn');
    const $heroDescr = document.querySelector('.hero__descr');
    const $firstImg = document.querySelector('.first-img');
    const $secondImg = document.querySelector('.second-img');
    const $thirdImg = document.querySelector('.third-img');
    const $photosAuthor = document.querySelector('.photos__author');

    const tl = gsap.timeline();

    tl.fromTo($heroTitle, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "expo.out"
    })
    .fromTo($heroBtn, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "expo.out"
    })
    .fromTo($heroDescr, {
        opacity: 0,
        y: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.out"
    })
    .fromTo($firstImg, {
        opacity: 0,
        y: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
    })
    .fromTo($secondImg, {
        opacity: 0,
        y: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
    })
    .fromTo($thirdImg, {
        opacity: 0,
        y: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
    })
    .fromTo($photosAuthor, {
        opacity: 0,
        y: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
    });
    

    // -------burger------------------
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.close');
    const menuNav = document.querySelector('.menu__nav');
    const social = document.querySelector('.social');
    const menuRight = document.querySelector('.menu__right');
    const tlMenu = gsap.timeline({paused: true});


    tlMenu.fromTo(menu, {
      opacity: 0,
      y: 50
    }, {
      display: 'block',
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out" 
    })
    .fromTo(menuNav, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out" 
    })
    .fromTo(menuRight, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out" 
    })
    .fromTo(social, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out" 
      });
      
      burger.addEventListener('click', () => {
        
        tlMenu.play();
      });
      
      menuClose.addEventListener('click', () => {
        tlMenu.reverse();
        
      });


})