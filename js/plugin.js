$('#slider1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoPlaySpeed: 8000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#slider2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(document).ready(function(){
    
    $(window).on("scroll",function(){
        

        $(".hide-section").each(function(){
            if($(window).scrollTop()>= ($(this).offset().top)-600){
                $(this).animate({
                opacity:1},1000);}
        
            });
        
        if($(window).scrollTop()>= ($(".hide-section").offset().top)-400){
            $(".up-btn").fadeIn();
            }
        else{
            $(".up-btn").fadeOut();
        } 

        $(".up-btn").on("click",function(){
            $(window).scrollTop(0);
        });
        });
    
})
