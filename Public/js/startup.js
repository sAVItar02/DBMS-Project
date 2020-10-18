$(document).ready(function () {
  let fromInput = $('#from');
  let toInput = $('#to');
  let exchangeBtn = $('.invert');

  exchangeBtn.on('click', (e) => {
    e.preventDefault();
    InputExchange(fromInput, toInput);
  });

  $('.search-button').on('click', (e) => {
    const fromInputValue = fromInput.val();
    const toInputValue = toInput.val();

    sessionStorage.setItem('fromInputValue', fromInputValue);
    sessionStorage.setItem('toInputValue', toInputValue);

    if (!fromInputValue || !toInputValue) {
      e.preventDefault();
    }
  });
});

function InputExchange(fromInput, toInput) {
  currentFromInputVal = fromInput.val();
  currenttoInputVal = toInput.val();
  fromInput.val(currenttoInputVal);
  toInput.val(currentFromInputVal);
  fromInput.addClass('blinkOnce');
  toInput.addClass('blinkOnce');
}
