const initVideoSlider = () => {
  const videoContainer = document.querySelector(".video__container");

  new Swiper(videoContainer, {
    slidesPerView: 3,
    slidesPerSlide: 3,
    spaceBetween: 50,
    pagination: {
      el: ".video__container .swiper-pagination",
      bullets: true,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerSlide: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      700: {
        slidesPerSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerSlide: 3,
        spaceBetween: 50,
      },
    },
  });
};

const initMediaSlider = () => {
  const mediaContainer = document.querySelector(".media__container");

  new Swiper(mediaContainer, {
    slidesPerView: 3,
    spaceBetween: 65,
    pagination: {
      el: ".media__container .swiper-pagination",
      bullets: true,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerSlide: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        slidesPerSlide: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        slidesPerSlide: 3,
        spaceBetween: 65,
      },
    },
  });
};

const initSocialsSlider = () => {
  const socialsContainer = document.querySelector(".socials__container");

  new Swiper(socialsContainer, {
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
      el: ".socials__container .swiper-pagination",
      bullets: true,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerSlide: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        slidesPerSlide: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        slidesPerSlide: 2,
        spaceBetween: 60,
      },
    },
  });
};

const initResultsSlider = () => {
  const resultsContainer = document.querySelector(".results__container");

  new Swiper(resultsContainer, {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".results__container .swiper-pagination",
      bullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".results__navigation_button.prev",
      nextEl: ".results__navigation_button.next",
    },
  });
};

const initFeedbackSlider = () => {
  const feedbackContainer = document.querySelector(".feedback__container");

  new Swiper(feedbackContainer, {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    pagination: {
      el: ".feedback__container .swiper-pagination",
      bullets: true,
      clickable: true,
    },
  });
};

const initTabToggler = () => {
  const tabsWrapper = document.querySelector(".protocol__buttons");
  const tabs = document.querySelectorAll(".protocol__button");
  const content = document.querySelectorAll(".protocol__item");

  tabsWrapper.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("protocol__button")) {
      const tabData = target.dataset.tab;
      const tabContent = document.querySelector(`[data-content="${tabData}"]`);
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("protocol__button--active");
      }

      target.classList.add("protocol__button--active");

      for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("protocol__item--active");
      }

      tabContent.classList.add("protocol__item--active");
    }
  });
};

const initMap = () => {
  ymaps.ready(function () {
    myMap = new ymaps.Map(
      "map-container",
      {
        center: [55.753215, 37.622504],
        zoom: 10,
        controls: [],
      },
      {
        maxZoom: 17,
      }
    );

    myMap.controls.add(new ymaps.control.ZoomControl());

    myMap.behaviors.disable("scrollZoom");
  });
};

const initMenu = () => {
  const menu = document.querySelector(".header__menu");
  const burger = document.querySelector(".header__menu_button");
  const close = document.querySelector(".header__menu_close");

  burger.addEventListener("click", () => {
    menu.classList.add("header__menu--active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("header__menu--active");
  });
}

initFeedbackSlider();
initResultsSlider();
initTabToggler();
initVideoSlider();
initMediaSlider();
initSocialsSlider();
initMap();
initMenu();
AOS.init();
