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
    slidesPerView: 1,
    centeredSlides: true,
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
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
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

function heroMargin() {
  const hero = document.querySelector('.hero');

  if (!hero) {
    return null
  }
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  hero.style.marginTop = `-${headerHeight}px`;
}

heroMargin();


function heroSlider() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.hero__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.hero__slider-arrow--next',
      prevEl: '.hero__slider-arrow--prev',
    },

  });
}

heroSlider();

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

function map() {
  const container = document.querySelector('.exhibition-samples__map')
  if (!container) {
    return null
  }

  let coordinates = [
    [55.786225, 37.248134],
    [55.779502, 37.855675],
    [55.8204, 37.3302],
    [55.6183, 37.4711],
    // Add more coordinates as needed
  ];

  function init() {


    let map = new ymaps.Map('exhibition-samples-map', {
      center: [55.751244, 37.618423],
      zoom: 9
    });

    coordinates.forEach(coord => {
      let placemark = new ymaps.Placemark(coord, {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/pin.svg',
        // iconImageHref: '/local/templates/main/img/icons/pin.svg',
        iconImageSize: [42, 42],
        iconImageOffset: [-14, -64]
      });

      map.geoObjects.add(placemark);
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

map();

function updateDate() {
  var currentDateElement = document.getElementById('current-date');
  if (!currentDateElement) {
    return null
  }
  var currentDate = new Date();

  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
  var year = currentDate.getFullYear();

  // Форматирование даты как "DD.MM.YYYY"
  var formattedDate = (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + year;

  // Установка отформатированной даты в элемент с id="current-date"
  currentDateElement.textContent = formattedDate;
}

// Вызов функции updateDate при загрузке страницы
updateDate();

// Запуск функции updateDate каждый день (в миллисекундах)
setInterval(updateDate, 24 * 60 * 60 * 1000);

let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};


document.addEventListener('scroll', () => {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
})



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

document.addEventListener('DOMContentLoaded', function () {
  var customStopVideo = () => {
    var iframe = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframe, iframe => {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'stopVideo'
      }), '*');
    });
  }

  document.querySelector(".close-modal-btn").onclick = function () {
    customStopVideo();
  };

  // Добавьте код для закрытия модального окна при клике в других областях страницы.
  document.addEventListener('click', function (event) {
    var modal = document.querySelector('.modal'); // Замените '.your-modal-class' на класс вашей модалки
    if (event.target !== modal && !modal.contains(event.target)) {
      // Код для закрытия модалки, например, modal.style.display = 'none';
      customStopVideo();
    }
  });
});
