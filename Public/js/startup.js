$(document).ready(function() {

    let fromInput = $("#from");
    let toInput = $("#to");
    let exchangeBtn = $(".invert");

    exchangeBtn.on('click', (e) => {
        e.preventDefault();
        InputExchange(fromInput, toInput);
    })

    $('.search-button').on('click', () => {
        fetch('http://127.0.0.1/:3000/flights?a=2&b=5')
        .then(response => response.json)
        .then(result => {
            console.log(result);
        })
    });
})

function InputExchange(fromInput, toInput) {
    currentFromInputVal = fromInput.val();
    currenttoInputVal = toInput.val();
    fromInput.val(currenttoInputVal);
    toInput.val(currentFromInputVal);
    fromInput.addClass('blinkOnce');
    toInput.addClass('blinkOnce');
}
