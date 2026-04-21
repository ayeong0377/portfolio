document.addEventListener('DOMContentLoaded', function() {
      //   kv-title 이동
      const box = document.querySelector('.main-title-box');

      setTimeout(() => {
        box.classList.add('active');
      }, 300);

      // 스킬 바 애니메이션
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      
      // 각 바의 원래 width 값 저장 후 초기값을 0으로 설정
      skillBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.dataset.targetWidth = originalWidth;
        bar.style.width = '0';
      });
      
      const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 저장된 width 값으로 복원
            entry.target.style.width = entry.target.dataset.targetWidth;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      skillBars.forEach(bar => {
        observer.observe(bar);
      });

      // 프로젝트 슬라이드 스와이퍼
      const projectSwiper = new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          prevEl: '.project-button-prev',
          nextEl: '.project-button-next',
        },
      });

      
    });

