fromInputValue = sessionStorage.getItem('fromInputValue');
toInputValue = sessionStorage.getItem('toInputValue');

const api = `https://dbms-flights-project.herokuapp.com/flights?from=${fromInputValue}&to=${toInputValue}`
// const api = `https://jsonplaceholder.typicode.com/todos/1`;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
            
// var json = JSON.stringify(data);
            
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function GetSpecificFlights() {
    fetch(api, requestOptions)
    .then(response => response.json())
    .then((result) => {
        console.log(result);
    });
}

GetSpecificFlights();