$(document).ready(function() {
    //menu toggle
    $(".menu").click(function() {
        $("nav").slideToggle();
    });



    var menu = $("nav");
    jQuery(window).on('resize', function() {
        if (!jQuery(".menu").is(":visible") && !menu.is(':visible')) {
            menu.css({ 'display': '' });
        }
    });
    $('.menu').click(function() {
        var checkbox = $(this).find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));
        $('#header').addClass('bgr_white');
    });
    $('nav ul li').click(function() {
        var checkbox = $('.menu').find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));
    });
    $('input[type=checkbox]').click(function(e) {
        e.stopPropagation();
        return true;
    });
    $(".menu").hover(function(e) {
        if (!$(".burger").is(":checked"))
            $(".label").addClass("hover");
    }, function() {
        !$(".label").removeClass("hover");
    });
    $(".menu").click(function() {
        $(".label").removeClass("hover");

    });

    if (window.matchMedia('screen and (min-width: 1199px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#header').css("box-shadow", "2px 2px 8px #000000").css("position", "fixed").css("height", "80px");
                $('nav ul li').css("margin-top", "0px ").css("margin-bottom", "0px ");
                $('.logo').css("width", "11%");

            } else {
                $('#header').css("box-shadow", "none").css("position", "relative").css("height", "100px");
                $('nav ul li').css("margin-top", "45px").css("margin-bottom", "45px");
                $('.logo').css("width", "15%");
            }
        });

    };
    if (window.matchMedia('screen and (max-width: 1199px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 136) {
                $('#header').css("box-shadow", "2px 2px 8px #000000").css("position", "fixed").css("background-color", "white");


            } else {
                $('#header').css("box-shadow", "none").css("position", "absolute").css("background-color", "transparent");

            }
        });
        $("nav ul li").click(function() {
            $("nav").slideUp();

        });
    };
    if (window.matchMedia('screen and (min-width: 1200px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 625) {
                $('#header').css("box-shadow", "2px 2px 8px #000000").css("position", "fixed").css("background-color", "white");


            } else {
                $('#header').css("box-shadow", "none").css("position", "absolute").css("background-color", "transparent");

            }
        });

    };
    $('.slide_img').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    // scroll menu
    $('a').click(
        function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            event.preventDefault();
        });

    //animation wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

//scroll nav
if (window.matchMedia('screen and (min-width: 1199px)').matches) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }
}