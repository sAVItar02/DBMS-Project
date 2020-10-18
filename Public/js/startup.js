$('.card-popup').hide();
$('.overlay').hide();
$(document).ready(function() {

    let fromInput = $("#from");
    let toInput = $("#to");
    let exchangeBtn = $(".invert");

    exchangeBtn.on('click', (e) => {
        e.preventDefault();
        InputExchange(fromInput, toInput);
    })


    $('.search-button').on('click', (e) => {
        const fromInputValue = fromInput.val();
        const toInputValue = toInput.val();

        sessionStorage.setItem('fromInputValue', fromInputValue)
        sessionStorage.setItem('toInputValue', toInputValue)

        if(!fromInputValue || !toInputValue)
        {
            e.preventDefault();
        }
    });

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
})



function InputExchange(fromInput, toInput) {
    currentFromInputVal = fromInput.val();
    currenttoInputVal = toInput.val();
    fromInput.val(currenttoInputVal);
    toInput.val(currentFromInputVal);
    fromInput.addClass('blinkOnce');
    toInput.addClass('blinkOnce');
}

