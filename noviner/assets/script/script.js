$(document).ready(function () {

    // navbar shadow on scroll
    $(document).on("scroll", function () {
        if ((document.documentElement.scrollTop) > 0) {
            $('.navbar').addClass('navbar-shadow')
        }
        if ((document.documentElement.scrollTop) <= 0) {
            $('.navbar').removeClass('navbar-shadow')
        }
    })

    // mega menu => services
    // $('#services').hover(function () {
    //     $('.mega-menu-services').removeClass('d-none')
    // })
    // $('#services').on("mouseleave", function () {
    //     $('.mega-menu-services').addClass('d-none')
    // })

    // mega menu => products
    // $('#products').hover(function () {
    //     $('.mega-menu-products').removeClass('d-none')
    // })
    // $('#products').on("mouseleave", function () {
    //     $('.mega-menu-products').addClass('d-none')
    // })


    // Show the submenu when hovering over the title
    $('#services').hover(function () {
        $('.mega-menu-services').removeClass('d-none');
    });

    // Keep the submenu visible when hovering over the submenu itself
    $('.mega-menu-services').hover(function () {
        $('.mega-menu-services').removeClass('d-none');
    }, function () {
        // Hide the submenu when leaving the submenu area
        $('.mega-menu-services').addClass('d-none');
    });

    // Hide the submenu when the mouse leaves both the title and the submenu
    $('#services, .mega-menu-services').on("mouseleave", function () {
        $('.mega-menu-services').addClass('d-none');
    });

    // Repeat the same logic for the products menu
    $('#products').hover(function () {
        $('.mega-menu-products').removeClass('d-none');
    });

    $('.mega-menu-products').hover(function () {
        $('.mega-menu-products').removeClass('d-none');
    }, function () {
        $('.mega-menu-products').addClass('d-none');
    });

    $('#products, .mega-menu-products').on("mouseleave", function () {
        $('.mega-menu-products').addClass('d-none');
    });


    // changing menu images
    $('.menuItem').hover(
        function () {
            let img = $(this).find('img');
            let originalSrc = img.attr('src');

            let x = originalSrc.split('.');
            let y = x[0].length;
            let id = x[0][y - 1];
            // assets/img/mega-menu/services/7.svg
            img.attr('data-original', originalSrc);
            img.attr('src', x[0] + id + '.' + x[1]);

        },
        function () {
            var img = $(this).find('img');
            img.attr('src', img.attr('data-original'));
        }
    );

});