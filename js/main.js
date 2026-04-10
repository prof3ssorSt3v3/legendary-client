document.addEventListener('DOMContentLoaded', init);

function init() {
  switch (document.body.id) {
    case 'login':
      document.getElementById('btnLogin').addEventListener('click', attemptLogin);
      break;
    case 'private':
      break;
  }
}
function attemptLogin(ev) {
  //redirect to the API endpoint /api/auth/login
  const API = new URL('https://legendary-server.vercel.app/api/auth/login');
  //send our redirectURL to that endpoint
  const returnpoint = 'https://legendary-client.vercel.app/private.html';
  API.search = `?redirect_url=${encodeURIComponent(returnpoint)}`;
  location.assign(API.href);
}

//TODO:
// add logout
// add fetch call to /api/auth/private
// add handling and checking for the token
