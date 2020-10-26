const api = `https://dbms-flights-project2.herokuapp.com/travelHistory`;

const myHeaders = new Headers();
myHeaders.append('Authorization', sessionStorage.getItem('authToken'));
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

function GetTravelHistory() {
  fetch(api, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      let output = ``;

      for (i = 0; i < result.length; i++) {
        const data = {
          from: result[i].from,
          to: result[i].to,
          flightCode: result[i].flightCode,
          date: result[i].depTime,
        };

        dateNew = data.date
          .split('T')[0]
          .substring(2, data.date.split('T')[0].length);

        output += `<div class="card card-hover">
            <div class="flight-code">${data.flightCode}</div>
            <div class="from">${data.from}</div>
            <span>&rarr;</span>
            <div class="to">${data.to}</div>
            
            <div class="date">${dateNew}</div>
            </div>`;
      }

      $('.card-buffer').empty();
      $('.card-buffer').html(output);
    });
}

GetTravelHistory();
