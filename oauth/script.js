function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);

  setCookie('Id', responsePayload.sub, 7);
  setCookie('Name', responsePayload.name, 7);
  setCookie('Forename', responsePayload.given_name, 7);
  setCookie('Surname', responsePayload.family_name, 7);
  setCookie('Image', responsePayload.picture, 7);
  setCookie('Email', responsePayload.email, 7);

  checkSession();
}

function logout() {
  setCookie('Id', '', 1);
  setCookie('Name', '', 1);
  setCookie('Forename', '', 1);
  setCookie('Surname', '', 1);
  setCookie('Image', '', 1);
  setCookie('Email', '', 1);
  document.getElementById('data').style.display = 'none';
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
  const discord = new URLSearchParams(window.location.hash.slice(1));
  const [accessToken, tokenType] = [discord.get('access_token'), discord.get('token_type')];

  if (`${tokenType}` != null) {
    fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then(result => result.json())
			.then(result => {
				//const { username, discriminator } = response;
				setCookie('Id', result.id, 1);
        		setCookie('Name', result.username + '#' + result.discriminator, 1);
        	setCookie('Forename', 'Nobody knows', 1);
        	setCookie('Surname', 'Nobody knows', 1);
        	setCookie('Image', 'https://cdn.discordapp.com/avatars/' + result.id + '/' + result.avatar + '?size=128', 1);
        	setCookie('Email', result.email, 1);
			})
			.catch(console.error);
  }

  if (getCookie('Email') != '') {
    document.getElementById('data').style.display = 'block';

    document.getElementById('Id').innerHTML = 'Id: ' + getCookie('Id');
    document.getElementById('Name').innerHTML = 'Name: ' + getCookie('Name');
    document.getElementById('Forename').innerHTML = 'First Name: ' + getCookie('Forename');
    document.getElementById('Surname').innerHTML = 'Surname: ' + getCookie('Surname');
    document.getElementById('Image').src =  getCookie('Image');
    document.getElementById('Email').innerHTML = 'Email: ' + getCookie('Email');
  }
}