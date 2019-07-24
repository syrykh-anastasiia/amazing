jQuery(function() {
    initMobileNav();
});

function initMobileNav() {
    $('.nav-opener').click(function() {
        $('body').toggleClass('nav-active');
    });

    $(window).on('resize', function() {
        $('body').removeClass('nav-active');
    });
}