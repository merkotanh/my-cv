/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function switchLanguage(lang) {
    const enElements = document.querySelectorAll('.lang-en');
    const deElements = document.querySelectorAll('.lang-de');
    const btnEn = document.getElementById('btn-en');
    const btnDe = document.getElementById('id-de');

    if (lang === 'en') {
        enElements.forEach(el => el.style.display = 'block');
        deElements.forEach(el => el.style.display = 'none');
        if(btnEn) btnEn.classList.add('active');
        if(btnDe) btnDe.classList.remove('active');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        deElements.forEach(el => el.style.display = 'block');
        if(btnDe) btnDe.classList.add('active');
        if(btnEn) btnEn.classList.remove('active');
    }
}
