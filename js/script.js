/*-------------------------------------------------------------------------------------------------------------------------------

This is main JS file that contains custom scripts used in this template
---------------------------------------------------------------------------------------------------------------------------------
Template Name: "beCreative"
Version: 1.0 Initial Release
Build Date: 05/23/2017
Author: DesignHouse
Website: http://becreative.designhouse.rs
Copyright: (C) 2017
---------------------------------------------------------------------------------------------------------------------------------

TABLE OF CONTENTS:

01 - Back To Top
02 - Menu 
03 - WOW
04 - Smooth Scroll
05 - Lightbox
06 - Preloader
07 - Tabs
08 - Project Gallery Grid
09 - Fullscreen Video

-------------------------------------------------------------------------------------------------------------------------------*/


jQuery(function($) {
    "use strict";

    /* 01 - Back To Top */
    var amountScrolled = 300;
    var backBtn = $("a.scrollToTop");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("slow");
        } else {
            backBtn.fadeOut("slow");
        }
    });
    backBtn.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    /* 02 - Menu */

    $('#nav-button').on('click', function() {
        $(this).toggleClass('width');
        $(this).parent().toggleClass('show');
        $(this).children().toggleClass('icon-signal').toggleClass('icon-remove');
        $('#nav-list').toggleClass('nav-show');
        $('#cover').toggleClass('display');
    });

    /* 03 - WOW */

    if ($(window).width() > 767) {
        new WOW().init();
    }

    /* 04 - Smooth Scroll */

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 150
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});

/* 05 - Lightbox */

lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'showImageNumberLabel': false
})

/* 06- Preloader */

$(".loader-wrapper").delay(1500).fadeOut(1000);


/* 07 - Tabs */

function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* 08 - Project gallery */

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
});

$grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
});

$('.filter-dh-btn-def-group').on('click', '.dh-btn-gal', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.dh-btn-def-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'dh-btn-gal', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

/* 09 - Video Fullscreen on click */

function goFullscreen() {
    var element = document.getElementById('player');
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
