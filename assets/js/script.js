let menu = document.querySelector('#menu-icon');
let navlistt = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classListt.toggle('bx-x');
    navlist.classListt.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-imgg',{delay:450, origin:'top'});
sr.reveal('.iconsss',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});