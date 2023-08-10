(function($, Drupal) {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });

    'use strict';
    var slider_flag = 0;


    Drupal.behaviors.slider = {
        attach(context, settings) {
            if (slider_flag == 0) {
                const slider_ac = tns({
                    container: '.my-slider',
                    items: 1,
                    slideBy: 'page',
                    controls: true,
                    nav: false,
                    loop: true,
                });
                slider_flag = 1;
            }
        }
    };
})(jQuery, Drupal);