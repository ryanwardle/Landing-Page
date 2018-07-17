function enableStickyNav() {

  const nav = document.getElementById('nav-bar');
  const topOfNav = nav.offsetTop;
  function fixNav() {
    console.log(topOfNav, window.scrollY);

    if(window.scrollY >= 200){
      document.body.classList.add('fixed-nav');
    }else{
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
}

enableStickyNav();
