$('.card-popup').hide();
$('.overlay').hide();
$(document).ready(function() {

    $('.details').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().children('.card-popup').show();
        $('.overlay').show();
        $(this).parent().parent().parent().removeClass('card-hover');

        $('.close').on('click', (e) => {
            e.preventDefault();
            $('.card-popup').hide();
            $('.overlay').hide();
            $(this).parent().parent().parent().addClass('card-hover');
        })
    })

});