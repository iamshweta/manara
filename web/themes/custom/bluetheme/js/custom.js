(function ($, Drupal) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
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
})(jQuery, Drupal);
