function enableStickyNav() {

  const nav = document.getElementById('nav-bar');
  const topOfNav = nav.offsetTop;
  function fixNav() {

    if(window.scrollY >= 200){
      document.body.classList.add('fixed-nav');
    }else{
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
}

enableStickyNav();



//MOBILE-NAV CLICK EVENT

const mobileIcon = document.getElementById('mobile-nav-icon');

mobileIcon.addEventListener('click', function() {

    if(mobileIcon.classList.contains('fa-bars')){
      mobileIcon.classList.remove('fa-bars');
      mobileIcon.classList.add('fa-times');
      document.getElementById('nav-list').style.display = 'block';
    }else if (mobileIcon.classList.contains('fa-times')) {
      mobileIcon.classList.remove('fa-times');
      mobileIcon.classList.add('fa-bars');
      document.getElementById('nav-list').style.display = 'none';
    }

});



//SMOOTH SCROLLING SNIPPET

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
