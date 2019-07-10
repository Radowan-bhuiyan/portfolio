$(document).ready(function($) {
    "use strict";
    //==============================
    // smooth scroll
    //==============================
    $("#site-nav .navbar-nav li a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);

    });


    //==============================
    //on-scroll
    //==============================
    $(window).on('scroll', function() {
        var wscroll = $(this).scrollTop();
        //fixed-nav
        wscroll > 1 ? $(".navbar").addClass("fixed") : $(".navbar").removeClass("fixed");

        // go top appear
        wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

    });

    //go top
    $("#goTop").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 600);
    });

    // WOW Js Active
    new WOW().init();

    // stciky menu

    // ---- Active
    $(".owl-carousel-item").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $(".owl-carousel-testimonial").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });




    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    //     navText:["<i class='fas fa-long-arrow-alt-left'</i>",
    // "<i class='fas fa-long-arrow-alt-left'</i>"],


    // Progress bar 
    $('.skillbar').skillbar({
        speed: 2000,
    });
    // https://gist.github.com/Shiponkormoker/89c66faa975cf13e0506769aefd476c5

    // Counter

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Magnific popup
    $('#youtube-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });

    // mixitup
    // var mixitup = require('.filter');
    // var mixer = mixitup('.portfolio-content');

    var containerEl = document.querySelector('.portfolio-content');

    var mixer = mixitup(containerEl, {
        animation: {
            animateResizeContainer: false // required to prevent column algorithm bug
        }
    });


    // portfolio popup image
    $('.image-link').magnificPopup({
        type: 'image'
    });



    //   var $grid = $('.grid').isotope({
    //   itemSelector: '.grid-item',
    //   percentPosition: true,
    //   masonry: {
    //     // use outer width of grid-sizer for columnWidth
    //     columnWidth: '.grid-item'
    //   }
    // })


    // // filter items on button click
    // $('.filter-button-group').on( 'click', 'button', function() {
    //   var filterValue = $(this).attr('data-filter');
    //   $grid.isotope({ filter: filterValue });
    // });

    // seetion fadein scroll

    AOS.init();


}(jQuery));