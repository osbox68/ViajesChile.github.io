
$(document).ready(function(){
    $('body').scrollspy({target: '.scrollspy', offset: 70});

    $('[data-toggle="tooltip"]').tooltip(); 

    $('[data-toggle="popover"]').popover(); 

    $('.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 70
        }, 50);
        return false;
    });
});