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
