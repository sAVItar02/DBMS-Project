$('.card-popup').hide();
$(document).ready(function() {

    $('.details').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().children('.card-popup').show();
    })

});