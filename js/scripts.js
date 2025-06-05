let swiper = new Swiper(".clients-image__slider",{
    loop: !0,
    slidesPerView: 4,
    watchOverflow: !0,
    freeMode: !0,
    initialSlide: 1,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".slider-block__arrow.swiper-button-next",
        prevEl: ".slider-block__arrow.swiper-button-prev"
    },
    autoplay: {
        delay: 1e3,
        disableOnInteraction: !1
    },
    speed: 800
});
window.addEventListener("scroll", function() {
    0 < scrollY ? document.querySelector(".header").classList.add("scroll") : document.querySelector("header").classList.remove("scroll")
});
