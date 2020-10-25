$('.not-logged-in').hide();

const api = `http://localhost:3000/profile`;

function LoadProfile() {
  if (!sessionStorage.getItem('authToken')) {
    $('.user').hide();
    $('.not-logged-in').show();
  } else {
    fetch(api)
      .then((response) => response.json)
      .then((result) => {
        console.log(result);
      });
  }
}

LoadProfile();
