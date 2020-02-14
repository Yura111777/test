var swiper = new Swiper('.swiper-container-horizontal', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: '.swiper-pagination-horizontal',
    paginationClickable: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});



var swiperVertical = new Swiper('.swiper-container-vertical', {
    paginationClickable: true,
    mousewheelControl: true,
    parallax: true,
    speed: 600,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: '.swiper-pagination-vertical'

});


if(parseInt($('body').width()) < 800){
 $('.info-text').addClass('swiper-slide');
    var swiperHorizontal = function(){
        new Swiper('.swiper-container-horizontal-second', {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            paginationClickable: true,
            pagination: '.swiper-pagination-horizontal-second'

        })
    };
    swiperHorizontal();
}