$(document).ready(function () {
    $(document).on("scroll", function () {
        if ((document.documentElement.scrollTop) > 0) {
            $('.navbar').addClass('navbar-shadow')
        }
        if ((document.documentElement.scrollTop) <= 0) {
            $('.navbar').removeClass('navbar-shadow')
        }
    })

    // $('.menuItem').hover(function () {
    //     let items = $('.menuItem');
    //     for (let item in items) {

    //     }
    // })

    $('#services').hover(function () {
        $('.mega-menu').removeClass('d-none')
    })
    $('.mega-menu').on("mouseleave", function(){
        $('.mega-menu').addClass('d-none')
    })

    
});