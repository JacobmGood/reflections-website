/**
 * Street Tribe–style navbar: scroll shrink + mobile drawer.
 */
(function () {
  const navbar = document.querySelector('.navbar');
  const menuBtn = document.querySelector('.nav-menu-btn');
  const drawer = document.querySelector('.nav-drawer');
  const overlay = document.querySelector('.nav-drawer-overlay');
  const drawerLinks = document.querySelectorAll('.nav-drawer-nav a');

  if (!navbar) return;

  // Scroll shrink (100px → 70px at scrollY >= 30)
  function onScroll() {
    const scrolled = window.scrollY >= 30;
    navbar.classList.toggle('scrolled', scrolled);
    document.body.classList.toggle('navbar-scrolled', scrolled);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openDrawer() {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    drawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    drawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeDrawer();
  });
})();
