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
