$('.not-logged-in').hide();
$('.loader-container').hide();

const api = `https://dbms-flights-project2.herokuapp.com/paymentHistory`;

const myHeaders = new Headers();
myHeaders.append('Authorization', sessionStorage.getItem('authToken'));
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

function GetPayments() {
  if (!sessionStorage.getItem('authToken')) {
    $('.container').hide();
    $('.not-logged-in').show();
  } else {
    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        $('.loader-container').show();
        $('.container').hide();
        let output = ``;

        for (i = 0; i < result.length; i++) {
          const data = {
            from: result[i].from,
            to: result[i].to,
            company: result[i].company,
            date: result[i].depTime,
            price: result[i].price,
          };

          dateNew = data.date
            .split('T')[0]
            .substring(2, data.date.split('T')[0].length);

          // const dateNew = new Date();
          // let currentDate = `${dateNew.getDate()}-${
          //   dateNew.getMonth() + 1
          // }-${dateNew.getFullYear()}`;

          output += `<div class="card card-hover">
            <div class="payed-on">
                Amount <span class="payment-price">${data.price} ₹</span> paid on <span class="payment-date">${dateNew}</span>
            </div>
            <div class="payment-company">Company: ${data.company}</div>
            <div class="payment-from">${data.from} <span>&rarr;</span> ${data.to}</div>
          </div>`;
        }

        $('.loader-container').hide();
        $('.container').show();
        $('.card-buffer').empty();
        $('.card-buffer').html(output);
      });
  }
}

GetPayments();
