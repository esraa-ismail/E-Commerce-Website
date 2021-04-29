$(document).ready(function()  {

    
        

        //choose    
            $(".owl-carousel").owlCarousel({
                     loop: true ,
                     margin: 10 ,
                     nav: true ,
                     responsive: {
                        0: {
                                    items:1
                        },
                        600: {
                                    items:2
                        },
                        1000: {
                                    items:3
                        }
                        
                     }
                     
                     
            } );
            
            //brand
            
             $('.brand-slider').slick({
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //review
     $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    //offers
$('#container').mixItUp();
    
   
            
                    });
 
  //loading screen
  
  $(window).on('load', function() {
    $('.loading-overlay .sk-fading-circle').fadeOut(1500, function(){

        $(this).parent().fadeOut(1000,function(){
             $(this).remove();
        });
    });
   });
  
   //back-to-top
   var scrollButton = $('a.back-to-top') ;
   
   $(window).scroll(function(){
    $(this).scrollTop() >= 800?scrollButton.show(): scrollButton.hide();
   });
   scrollButton.click(function(){
       $('body,html').animate({scrollTop : 0});
   });