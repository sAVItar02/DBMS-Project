let signUp = $('#signup');
let logIn = $('#login');
let toLogIn = $('#tologin');
let toSignUp = $('#tosignup');

signUp.hide();

toLogIn.on('click', function(e){
    e.preventDefault();
    signUp.hide();
    logIn.show();
});

toSignUp.on('click', function(e){
    e.preventDefault();
    logIn.hide();
    signUp.show();
});
