$(document).ready(function() {

    let fromInput = $("#from");
    let toInput = $("#to");
    let exchangeBtn = $(".invert");

    exchangeBtn.on('click', (e) => {
        e.preventDefault();
        InputExchange(fromInput, toInput);
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

