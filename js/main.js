$(document).ready(function(){
    $("#news-slider").owlCarousel({
        
        stagePadding: 50,
        
        rtl:true,
        //dotsEach: true,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
       
        
        pagination:false,
        autoPlay:true,
        dots: false,
        loop:true,
        navText: [" ", " "],
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        },

    

   
    });

  });


  
  $('.drop-down-show-hide').hide();

  $('#dropDown').change(function () {
      $('.drop-down-show-hide').hide()
      $('#' + this.value).show();
  
  });

  $('.drop-down-show-hide1').hide();

  $('#dropDown1').change(function () {
    $('.drop-down-show-hide1').hide()
    $('#' + this.value).show();

});
  


