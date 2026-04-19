document.addEventListener('DOMContentLoaded', function() {
  // 모바일 메뉴 열기/닫기
  var navToggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  var closeMenu = document.querySelector('.close-menu');

  if (navToggle && mobileMenu && closeMenu) {
    navToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
    // 모바일 메뉴 내 링크 클릭 시 닫기
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
  })
}

  // 스크롤 시 메뉴 배경색 변경
  const mainNav = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });
});