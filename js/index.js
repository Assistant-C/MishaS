$(function() {
    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});