const api = `https://dbms-flights-project2.herokuapp.com/paymentHistory`;

const myHeaders = new Headers();
myHeaders.append('Authorization', sessionStorage.getItem('authToken'));
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

function GetPayments() {
  fetch(api, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      let output = ``;

      console.log(result);
    });
}

GetPayments();
