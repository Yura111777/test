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
            spaceBetween: 0
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
    },
    nextButton:'.swiper-button-next',
    prevButton: '.swiper-button-prev'
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
    pagination: '.swiper-pagination-vertical',
    onSlideChangeEnd: function (){
        if(swiperVertical.activeIndex === 2){
            $('.on-bottom').addClass('active');
        }
        else if(swiperVertical.activeIndex === 0){
            $('.on-top').addClass('active');
        }
        else{
            $('.on-bottom').removeClass('active');
            $('.on-top').removeClass('active');
        }
    }

});

console.log(swiperVertical.activeIndex)

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