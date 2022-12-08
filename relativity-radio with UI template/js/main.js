(function ($) {
    "use strict";
    
    //Search bar
    var search_result
    function submit(){
        var get_from_http = new XMLHttpRequest();
        get_from_http.onreadystatechange = function(){
            if (get_from_http.readyState === 4){
                alert(get_from_http.response);
            }
        }
        get_from_http.open('GET', 'https://1w6pxgofqa.execute-api.us-east-1.amazonaws.com/REDKKPrototype/rapid-spotify?TrackId=4sFGNz4MYpGoz53ZGCwsiE', true);
        get_from_http.setRequestHeader('TrackId=4sFGNz4MYpGoz53ZGCwsiE');
        get_from_http.send();
        search_result = get_from_http.response;
    }       

    //Login/Register
    $(search-bar).ready(function(){
        $('.brand .search bar button').click(function(){
            ("#search_result").load('https://1w6pxgofqa.execute-api.us-east-1.amazonaws.com/REDKKPrototype/rapid-spotify?TrackId=4sFGNz4MYpGoz53ZGCwsiE', '.brand .search-bar .parent');
        });
    });

    //Create List
    var x = document.getElementById("loca")
    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else {
            x.innerHTML = "Geolocation is not supported by this browser."
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.longitude;
    }
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.nav-bar').addClass('nav-sticky');
        } else {
            $('.nav-bar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Top News Slider
    $('.tn-slider').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
    // Related News Slider
    $('.sn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);

