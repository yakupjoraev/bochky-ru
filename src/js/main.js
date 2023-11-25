// Custom scripts

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedHeader() {
  const header = document.querySelector('header')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    header.classList.add('fixed__header')
  } else {
    header.classList.remove('fixed__header')
  }
}
window.addEventListener('scroll', fixedHeader)


document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-video-pic")) {
    var iframeData = event.target.getAttribute("data-iframe");
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = iframeData;

    // Удаляем текущий iframe, если он есть
    var currentIframe = event.target.parentNode.querySelector("iframe");
    if (currentIframe) {
      currentIframe.parentNode.removeChild(currentIframe);
    }

    // Удаляем текущее изображение
    event.target.style.display = "none";

    event.target.parentElement.classList.add('active');

    // Вставляем новый iframe
    event.target.parentNode.appendChild(tempDiv.firstChild);
  }
});



function thanksReviewsSlider() {
  const container = document.querySelector('.thanks-reviews');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.thanks-reviews__slider-arrow--next',
      prevEl: '.thanks-reviews__slider-arrow--prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      // 991: {
      //   slidesPerView: 3,
      //   spaceBetween: 20
      // }
    }

  });
}

thanksReviewsSlider();

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});