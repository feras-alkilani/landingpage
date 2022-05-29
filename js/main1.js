$('.slick-Ban').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slick-Nav'
});

$('.slick-Nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-Ban',
  arrows: true,
  focusOnSelect: true,
  centerMode: true,
});

$('.slick-Content[data-id=1]').show();

$('.slick-Ban').on('afterChange', function(event, slick, currentSlide){   
  $('.slick-Content').hide();
  console.log(currentSlide);
  
  $('.slick-Content[data-id=' + (currentSlide + 1) + ']').show();
});
$("#owl-demo").owlCarousel({
  navigation : true
});
