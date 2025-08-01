// Scroll to Top
const scrollToTopItem = document.getElementById('scroll-to-top');
window.addEventListener('scroll', function(){

    if (document.body.scrollTop >= 50){
        scrollToTopItem.style.visibility = 'visible'
    } else{
        scrollToTopItem.style.visibility = 'hidden'
    }
});
/*
scrollToTopItem.addEventListener('click', function(){
    document.body.scrollTop = 0;
});
*/
scrollToTopItem.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Active Nav Link
/*
const navItem = document.getElementsByClassName('nav-item');
navItem.addEventListener('click', function(){
    navItems.classList.remove('active');
    navItem.classList.add('active');
});
*/
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(){
        navLinks.forEach(links => {
            links.classList.remove('active');
        });
        navLink.classList.add('active');
    });
});
