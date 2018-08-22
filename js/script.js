// Navbar scroll
$(document).ready(function() {
	$(window).scroll(function() {
        if($(document).scrollTop() > 200) {
            $('#navbar').addClass('scroll');
        }
        else {
        $('#navbar').removeClass('scroll');
        }
    });
    $(window).scroll(function () {
        onScrollHandle();
    });

    function onScrollHandle() {
        //Get current scroll position
        var currentScrollPos = $(document).scrollTop();

        //Iterate through all node
        $('.navbar-nav > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('.navbar-nav > .nav-item > a').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }
});

// active menu
$(document).ready(function(){
    $('.navbar-nav .nav-item').click(function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
    });
});

// Smooth scroll to hash link
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
            return false;
            } else {
            $target.attr('tabindex','-1');
            $target.focus();
            };
        });
        }
    }
});

// Instafeed
$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3311524260',
        resolution: 'standard_resolution',
        accessToken: '3311524260.39bf8d7.2663676c079841c58729295d0262e43b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-2 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});

//animasi pada card
$(document).ready(function(){

    $("#divisi div div .card, #kegiatan div div .card").mouseenter(function(){
        $(this).animate({
            height: '485px'
        }, 100);
        $(this).find('.card-body').show().animate({
            opacity: '1'
        }, 1000);
        $("#divisi h1, #kegiatan h1").animate({
            fontSize: '3.4rem'
        }, 500);
    }).mouseleave(function(){
        $(this).animate({
            height: '250px'
        }, 100);
        $(this).find('.card-body').hide().animate({
            opacity: '0'
        }, 1000);
        $("#divisi h1, #kegiatan h1").animate({
            fontSize: '3.5rem'
        }, 500);
    });
});