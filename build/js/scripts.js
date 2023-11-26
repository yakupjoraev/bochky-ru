// Custom Scripts
// Custom scripts

document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)
      const targetElement = document.getElementById(blockID)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  };
})


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

  const swiper = new Swiper('.thanks-reviews__slider', {
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


function videoReviewsSlider() {
  const container = document.querySelector('.video-reviews');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.video-reviews__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.video-reviews__slider-arrow--next',
      prevEl: '.video-reviews__slider-arrow--prev',
    },

    // If we need pagination
    pagination: {
      el: '.video-reviews__slider-pagination',
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 767
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }

  });
}

videoReviewsSlider();

function exhibitionSamplesSlider() {
  const container = document.querySelector('.exhibition-samples__inner');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.exhibition-samples__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.exhibition-samples__arrow--next',
      prevEl: '.exhibition-samples__arrow--prev',
    },

  });
}

exhibitionSamplesSlider();

document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(function (slider) {
    const sliderId = slider.getAttribute('data-slider-container');
    console.log(sliderId);
    new Swiper(slider, {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: `[data-slider-next="${sliderId}"]`,
        prevEl: `[data-slider-prev="${sliderId}"]`,
      },
      // pagination: {
      //   el: `[data-slider-pagination="${sliderId}"]`,
      // },
      // breakpoints: {
      //   320: {
      //     spaceBetween: 20,
      //   },
      //   991: {
      //     spaceBetween: 15,
      //   },
      // },
    });
  });
});

function modelsMore() {
  const container = document.querySelector('.case');

  if (!container) {
    return null
  }

  const moreBtn = document.querySelector('.case__sliders-more');

  moreBtn.addEventListener('click', () => {
    document.querySelector('.case__sliders').classList.add("more");
  })
}

modelsMore();

// Аккордеон
const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion() {
  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
    }
  }

  this.classList.toggle('active'); // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}


accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
