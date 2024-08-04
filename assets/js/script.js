$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items to show
        loop: true, // Loop back to the start
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        nav: false, // Hide navigation
        dots: false // Hide dots
    });
});