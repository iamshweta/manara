(function($, Drupal) {
    var slider_flag = 0;
    var slider = 0;

    Drupal.behaviors.testimonies = {
        attach(context, settings) {
            if (slider_flag == 0) {
                const slider_ac = tns({
                    container: '.testimonies',
                    autoplay: true,
                    slideBy: 1,
                    controls: true,
                    loop: true,
                    items: 1,
                    margin: 50,
                    nav: false,
                    autoplayButtonOutput: false,
                    controlsPosition: "bottom",
                });
                slider_flag = 1;
            }
        }
    };

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

            Drupal.behaviors.navigation = {
          attach: function (context, settings) {
              if(document.querySelectorAll('  [data-mobilenavbtn]').length > 0){
                const mobileNavBtn = document.querySelectorAll('[data-mobilenavbtn]');
                const mobileNav = document.querySelector('[data-mobilenav]');

                mobileNavBtn.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    mobileNav.classList.toggle('opened');
                 })
              })    
            }

          }
      }

    'use strict';

    Drupal.behaviors.slider = {
        attach(context, settings) {
            if (slider == 0) {
                const slider_ac = tns({
                    container: '.my-slider',
                    items: 1,
                    autoplay: true,
                    slideBy: 'page',
                    controls: true,
                    nav: false,
                    loop: true,
                });
                slider = 1;
            }
        }
    };
})(jQuery, Drupal);