AOS.init();
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdyr62TMz6k0r6q8H7fUI-bclhB0iTYvJy9RZcmvPbvX8VW-8p_UVGNcXBqTF3I_ck/exec';
const form = document.forms['visitor-contact-form'];
const alertSuccess = document.querySelector('.alert-form');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alertSuccess.classList.toggle('d-none');
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
});







let btn = $("#back-top");
// Parallax effect

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    $(".jumbotron h1").css({
        'transform': 'translate(1px, ' + wScroll / 3 + '%)',
    });
    $('.find-me').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });

    if (wScroll > 500) {
        btn.fadeIn();
        $('nav').css({
            'background-color': 'rgba(37, 37, 37, 0.616)',
            'backdrop-filter': 'blur(30px)'
        });
    } else {
        btn.fadeOut();
        $('nav').css({
            'background-color': 'transparent',
            'backdrop-filter': 'blur(0px)'
        });
    }
});
btn.click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 1000);
    $(".rocket").addClass("fly");

    setTimeout(function () {
        $(".rocket").removeClass("fly");
    }, 1000);

    return false;
});


// GSAP Animate
gsap.from('.jumbotron h1', {
    duration: 2,
    x: -200,
    opacity: 0.3
});
gsap.from('nav', {
    duration: 2,
    x: -1000,
    opacity: 0.3
});
gsap.from('.find-me', {
    duration: 3,
    x: 300,
    opacity: 0.3
})