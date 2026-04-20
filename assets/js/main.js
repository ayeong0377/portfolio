document.addEventListener('DOMContentLoaded', function() {
      //   kv-title 이동
      const box = document.querySelector('.main-title-box');

      setTimeout(() => {
        box.classList.add('active');
      }, 300);

      const projectSwiper = new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          prevEl: '.project-button-prev',
          nextEl: '.project-button-next',
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        },
      });
    });

