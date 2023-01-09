function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);

  setCookie('Id', responsePayload.sub, 7);
  setCookie('Name', responsePayload.name, 7);
  setCookie('Forename', responsePayload.given_name, 7);
  setCookie('Surname', responsePayload.family_name, 7);
  setCookie('Image', responsePayload.picture, 7);
  setCookie('Email', responsePayload.email, 7);
}

function logout() {
  setCookie('Id', '', 1);
  setCookie('Name', '', 1);
  setCookie('Forename', '', 1);
  setCookie('Surname', '', 1);
  setCookie('Image', '', 1);
  setCookie('Email', '', 1);
  document.getElementById('data').style.display = none;
}

function decodeJwtResponse(token) {
    //By zahadneokurkycz
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function checkSession() {
  if (getCookie('Email') != '') {
    document.getElementById('data').style.display = block;
  }
}