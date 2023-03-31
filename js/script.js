AOS.init();

const init = () => {

  window.onload = function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
    }, 3000);

    setTimeout(() => {
      startAnimation();
      preloader.classList.add('preloader-none');
    }, 3200);
  };

  const showNextSlide = () => {
    bgSlides('down');
    imagesSlides('down');
    shapesSlides('down');
    textSlides('down');
  };

  const showPrevSlide = () => {
    bgSlides('up');
    imagesSlides('up');
    shapesSlides('up');
    textSlides('up');
  };

  if (window.innerWidth >= 320) {
    window.addEventListener('wheel', (e) => {

      let delta = -e.deltaY;

      if (delta > 0) {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1000);
        }
      } else {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1000);
        }
      }
    });
  } else {
    document.addEventListener('swiped-left', () => {
      showNextSlide();
    });

    document.addEventListener('swiped-right', () => {
      showPrevSlide();
    });
  }
};

init();


function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    document.querySelector(".slide-bg__text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 50);
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 200);
  }
}

typeWriter("WELCOME TO MY PORTFOLIO! <br/>I am a front-end developer with one year of experience in creating visually appealing and interactive websites using the latest front-end technologies.During my time as a front-end developer, I have worked on various projects ranging from small business websites to large-scale web applications. <br/>1.  MY MISSION <br>To create an attactive and user-friendly interface for the end user by combining technical skills, creativity and the ability to solve problems.<br/>2.  MY GOALS <br>Writing clean and maintainable code that is easy to debug and update so that the final product meets the requirements of the customer.", 0, function() {
  console.log("text");
})

const dots = document.querySelectorAll(".sidebar a");
const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active")
  });
};
const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let currentDot = document.querySelector(`.sidebar a[href='#${entry.target.id}']`);
      console.log(entry.target.id);
      removeActiveClass();
      currentDot.classList.add("active");
    }
  })
};

const observer = new IntersectionObserver(addActiveClass);
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  observer.observe(section);
});


let elem = document.querySelector('.sidebar');
window.addEventListener('scroll', function() {
  let show = document.documentElement.scrollTop;
  if (show > 300) {
    elem.classList.add('sidebar__show');
  } else {
    elem.classList.remove('sidebar__show');
  }
});

let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let page = document.querySelector('main');
let slide = document.querySelector('.slide-bg');
let body = document.querySelector('body');
let navItems = document.querySelectorAll('.navbar__link');
let text = document.querySelector('.slides-container__text');
burger.addEventListener('click', () => {
  burger.classList.toggle('burger__active');
  navbar.classList.toggle('navbar__visible');
  page.classList.toggle('main-nav');
  slide.classList.toggle('slide-bg__visible');
  text.classList.toggle('slides-container__text--visible');
  body.classList.toggle('stop-scroll');
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger__active');
    navbar.classList.remove('navbar__visible');
    page.classList.remove('main-nav');
    slide.classList.remove('slide-bg__visible');
    text.classList.remove('slides-container__text--visible');
    body.classList.remove('stop-scroll');
  })
})

new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el:'.swiper-pagination',
    clickable: true
  },
});
