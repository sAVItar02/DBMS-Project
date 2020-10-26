$('.card-popup').hide();
$('.overlay').hide();

$(document).ready(function () {
  fromInputValue = sessionStorage.getItem('fromInputValue');
  toInputValue = sessionStorage.getItem('toInputValue');

  const api = `https://dbms-flights-project2.herokuapp.com/flights?from=${fromInputValue}&to=${toInputValue}`;
  // const api = `http://localhost:3000/flights?from=${fromInputValue}&to=${toInputValue}`;

  // var myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append("Access-Control-Allow-Origin": "*")

  // var json = JSON.stringify(data);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };

  function GetSpecificFlights() {
    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let output = ``;

        for (i = 0; i < result.length; i++) {
          const data = {
            arrTime: result[i].arrTime,
            depTime: result[i].depTime,
            cabinWeight: result[i].cabinWeight,
            checkinWeight: result[i].checkinWeight,
            company: result[i].company,
            duration: result[i].duration,
            from: result[i].from,
            to: result[i].to,
            price: result[i].price,
            id: result[i]._id,
            flightCode: result[i].flightCode,
          };

          $('.from').text(data.from);
          $('.to').text(data.to);

          output += `<div class="card card-hover">
                <div class="card-header">
                    <div class="card-tag">Timings</div>
                    <div class="card-tag">Flight ID</div>
                    <div class="card-tag">Flight Duration</div>
                    <div class="card-tag">Company</div>
                    <div class="card-tag">Price</div>
                </div>

                <div class="card-details">
                    <p class="hide">${data.id}</p>
                    <div class="timings">
                        <p class="from">7:45</p>
                        <span>-</span>
                        <p class="to">8:45</p>
                    </div>
                    <p class="flight-id"><i class="fas fa-plane"></i>${data.flightCode}</p>
                    <div class="duration">${data.duration}</div>
                    <div class="flight-details">
                        <p class="company-name">${data.company}</p>
                        <p class="details">Flight Details</p>
                    </div>
                    <div class="price">
                        ${data.price} 
                    </div>
                </div>
                <div class="card-popup">
                    <div><p class="close">&times;</p></div>
                    <div class="popup-details">
                        <div class="flight-popup-details">
                            <div class="flight-popup-timings">
                                <div class="popup-direction">
                                    <p class="from">${data.from}</p>
                                    <span>&rarr;</span>
                                    <p class="to">${data.to}</p>
                                </div>
                                <div class="popup-timings">
                                    <p>${data.arrTime}</p>
                                    <span>&nbsp;&#9679;&nbsp;</span>
                                    <p class="from">7:45</p>
                                    <span>-</span>
                                    <p class="to">8:45</p>
                                </div>
                                <div class="popup-flight-id">
                                    <p class="flight-id"><i class="fas fa-plane"></i> 6EABC</p>
                                </div>
                            </div>
                            <div class="popup-price">${data.price}</div>
                        </div>
                        <div class="baggage-popup-details">
                            <p class="baggage-info">
                                <i class="fas fa-suitcase-rolling"></i>
                                Check-in Baggage: <span>15</span>kg per person (1 piece only) effective Oct 1st, 2020. For Double or MultiSeats bookings, extra 10 kg. 
                                Additional charges may apply for excess baggage. Note: For bookings made between May 21 to Sept 30, 2020 (inclusive) for travel up to Nov 24, 2020, the allowance will be 20kg (1 piece only) instead of 15kg.
                                Hand Baggage  : One hand bag up to 7 kgs and 115 cms, shall be allowed per customer. For contactless travel we recommend to place it under the seat in front, on board.
                            </p>
                        </div>
                    </div>
                </div> 
            </div>`;
        }

        $('.card-buffer').empty();
        $('.card-buffer').html(output);

        $('.card-popup').hide();
        $('.overlay').hide();

        $('.details').on('click', function (e) {
          e.preventDefault();
          $(this).parent().parent().parent().children('.card-popup').show();
          $('.overlay').show();
          $(this).parent().parent().parent().removeClass('card-hover');

          $('.close').on('click', (e) => {
            e.preventDefault();
            $('.card-popup').hide();
            $('.overlay').hide();
            $(this).parent().parent().parent().addClass('card-hover');
          });
        });
        $('.card').on('click', function (e) {
          e.preventDefault();
          const currentFlightID = $(this)
            .children('.card-details')
            .children('.hide')
            .text();
        });
      });
  }

  GetSpecificFlights();
});
