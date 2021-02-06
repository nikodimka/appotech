document.addEventListener("DOMContentLoaded", function() {
  "use strict";

    // меню бургер и мобильное меню
    let burgerButton = document.getElementById('nav-icon');
    let mainMenu = document.querySelector('.header-menu');
    let linkMenu = document.querySelectorAll('.header-menu__link, .header-menu__phone');
    for(let link of linkMenu) {
      link.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        burgerButton.classList.remove('open');
        if (window.matchMedia('screen and (max-width: 991px)').matches) {

        }
      });
    }
    burgerButton.addEventListener('click', () => {
      burgerButton.classList.toggle('open');
      if ( burgerButton.classList.contains('open') ) {
        mainMenu.classList.add('active');
      } else {
        mainMenu.classList.remove('active');
      }
    });
    // закрыть меню при клике извне
    document.addEventListener('click', function(event) {
        let menu_button = document.querySelector('.header-toggler');
        let isClickInside = mainMenu.contains(event.target);
        if (menu_button.contains(event.target)) {
          return true;
        } else if (!isClickInside && mainMenu.classList.contains('active')) {
           mainMenu.classList.remove('active');
           menu_button.querySelector('#nav-icon').classList.remove('open');
        }
    });
    // слайдер whatsapp
    const whatsapps = document.querySelectorAll('#whatsapp');
    whatsapps.forEach(whatsapp => {
        new Splide( whatsapp, {
            type: 'fade',
            rewind: true,
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 1900,
            pauseOnHover: false
        } ).mount();
    });
    // слайдер slider
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        new Splide( slider, {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            /*pagination: false,*/
            arrows: false,
            autoplay: true,
            interval: 6000,
            breakpoints: {
                1000: {
                    destroy: true,
                },
            }
        } ).mount();
    });
    // слайдер statistics
    const statistics = document.querySelectorAll('#statistics');
    statistics.forEach(statistic => {
        new Splide( statistic, {
            type: 'fade',
            rewind: true,
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 1200,
            pauseOnHover: false
        } ).mount();
    });
    // кнопка подняться наверх
    document.querySelector('.header-logo').addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
            top: 0, 
            behavior: 'smooth' 
        });
    });
    // при скроле вниз фиксируем шапку
    let scrollpos = window.scrollY;
    const header = document.querySelector(".header");
    const header_height = header.offsetHeight;
    const whatsapp = document.querySelector(".whatsapp");

    const add_class_on_scroll = () => {
      header.classList.add("fixed-top");
      whatsapp.style.marginTop = header_height + 'px'
    };
    const remove_class_on_scroll = () => {
      header.classList.remove("fixed-top");
      whatsapp.style.marginTop = '0'
    };

    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;

      if (scrollpos >= header_height)
        add_class_on_scroll()
      else
        remove_class_on_scroll()
    });

    // Модальные окна
    const buttons = document.querySelectorAll('[data-modal-trigger]');
    const modals = document.querySelectorAll('.modal');
    for(let button of buttons) {
        modalEvent(button);
    }
    function modalEvent(button) {
        button.addEventListener('click', () => {
            const trigger = button.getAttribute('data-modal-trigger');
            const modal = document.querySelector(`[data-modal=${trigger}]`);
            const contentWrapper = modal.querySelector('.content-wrapper');
            const close = modal.querySelector('.close');

            [].forEach.call(modals, function(modal) {            
                if ( modal.classList.contains('open') ) {
                    console.log('h');
                    modal.classList.remove('open');
                }
            });

            close.addEventListener('click', () => modal.classList.remove('open'));
            modal.addEventListener('click', () => modal.classList.remove('open'));
            contentWrapper.addEventListener('click', (e) => e.stopPropagation());

            modal.classList.toggle('open');
        });
    }
    // Валидатор
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    });
    // Hide/Show password
    let btnPass =  document.querySelectorAll('.form-pass svg');
    for(let btn of btnPass) {
      btn.addEventListener('click', () => { 
        let password = btn.parentNode.querySelector('input');
        if (password.type === "password") {
            password.type = "text";
            btn.querySelector('use').setAttribute('xlink:href', '#eye-off-outline');
        } else {
            password.type = "password";
            btn.querySelector('use').setAttribute('xlink:href', '#eye-outline');
        }
      });
    }     
    // выделить меню при скроле
    /*const scrollSpy = () => {
        const targets = document.querySelectorAll('.link-section');
        const options = {
          threshold: 0.2,
        };

        if ('IntersectionObserver' in window) {
          const inView = target => {
            const interSecObs = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                const elem = entry.target;
                const currentNav = document.querySelector(`.header-menu__link[href='#${elem.id}']`);
                currentNav?.classList.toggle('active', entry.isIntersecting);
              })
            }, options);
            interSecObs.observe(target)
          };
          targets.forEach(inView);

        }
    };
    scrollSpy();*/
});
