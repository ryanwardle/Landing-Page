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
