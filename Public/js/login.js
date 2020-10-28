let signUp = $('#signup');
let logIn = $('#login');
let toLogIn = $('#tologin');
let toSignUp = $('#tosignup');
const loginBtn = $('#btn-login');
const registerBtn = $('#btn-register');

signUp.hide();
$('.loader').hide();

toLogIn.on('click', function (e) {
  e.preventDefault();
  signUp.hide();
  logIn.show();
});

toSignUp.on('click', function (e) {
  e.preventDefault();
  logIn.hide();
  signUp.show();
});

const apiSignup = `https://dbms-flights-project2.herokuapp.com/user/signup`;
const apiLogin = `https://dbms-flights-project2.herokuapp.com/user/login`;
// const apiLogin = `http://localhost:3000/user/login`;

const fName = $('#f-name');
const lName = $('#l-name');
const dob = $('#input-date');
const gender = $('#gender');
const mail = $('#email');
const phone = $('#phone');
const password = $('#password');

registerBtn.on('click', (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const data = {
    fname: fName.val(),
    lname: lName.val(),
    dob: dob.val(),
    gender: gender.val(),
    email: mail.val(),
    phone: phone.val(),
    password: password.val(),
    nationality: 'Indian',
  };

  var json = JSON.stringify(data);

  console.log(data);
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: json,
  };

  fetch(apiSignup, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      sessionStorage.setItem('authToken', result.token);
      window.location.href = './startup.html';
    });
});

loginBtn.on('click', (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const data = {
    email: $('#login-email').val(),
    password: $('#login-password').val(),
  };

  var json = JSON.stringify(data);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: json,
  };

  fetch(apiLogin, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      $('.loader').show();
      $('.container').hide();
      sessionStorage.setItem('authToken', result.token);
      $('.loader').hide();
      $('.container').show();
      window.location.href = './startup.html';
    });
});
