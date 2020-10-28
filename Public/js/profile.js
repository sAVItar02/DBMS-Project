$('.not-logged-in').hide();
$('.loader').hide();

const api = `https://dbms-flights-project2.herokuapp.com/profile`;

const myHeaders = new Headers();
myHeaders.append('Authorization', sessionStorage.getItem('authToken'));
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

function LoadProfile() {
  if (!sessionStorage.getItem('authToken')) {
    $('.user').hide();
    $('.not-logged-in').show();
  } else {
    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        $('.loader').show();
        $('.container').hide();

        if (result.gender == 'm') {
          $('.pfp').attr('src', '../Public/assets/male_avatar.svg');
        } else {
          $('.pfp').attr('src', '../Public/assets/female_avatar.svg');
        }

        $('.user-name').text(`${result.fname} ${result.lname}`);
        $('#fname').attr('placeholder', `${result.fname}`);
        $('#lname').attr('placeholder', `${result.lname}`);
        $('#nationality').attr('placeholder', `${result.nationality}`);
        dob = result.dob;
        splitDate = dob.split('T');
        $('#input-date').attr(
          'placeholder',
          `${splitDate[0].substring(2, splitDate[0].length)}`
        );
        console.log(splitDate[0].substring(2, splitDate[0].length));
        $('#email').attr('placeholder', `${result.email}`);
        $('#phone').attr('placeholder', `${result.phone}`);
        $('.loader').hide();
        $('.container').show();
      });
  }
}

LoadProfile();
