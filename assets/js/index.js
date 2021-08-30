$('.feedback-slick').slick({
    arrows : false,
    dots : true,
    infinite : true,
  slidesToShow: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
});

const smallNav = document.querySelector('.-small-nav')
const smallNavBox = document.querySelector('.nav-small-box')

const toggleNav = (el) => {
    smallNavBox.classList.toggle('open')
}