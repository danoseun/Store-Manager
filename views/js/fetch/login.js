// const baseURL = 'https://seun-storemanager.herokuapp.com';
const baseURL = 'http://localhost:4000';
const login = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const emailLabel = document.querySelector('[for="email"]');
  const passwordLabel = document.querySelector('[for="password"]');
  // const lblEmail = document.getElementById('lblEmail');
  // const lblPass = document.getElementById('lblPassword');

  // Cleancode!
  try {
    const result = await fetch(`${baseURL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const jsonRes = await result.json();
    console.log('HERE', jsonRes);
    let message = '';

    message = 'Please supply your email';
    if (jsonRes.message === message) {
      // lblEmail.style.color = 'red';
      emailLabel.style.color = 'red';
      emailLabel.textContent = ' Please supply your email';
      // lblEmail.innerHTML = jsonRes.message;
      setTimeout(() => {
        emailLabel.style.display = 'none';
      }, 3000);
      return;
    }

    message = 'Authentication failed';
    if (jsonRes.message === message) {
      emailLabel.style.color = 'red';
      emailLabel.textContent = ' Email not found, please signup';
      return;
    }

    message = 'Password cannot be empty';
    if (jsonRes.message === message) {
      passwordLabel.style.color = 'red';
      passwordLabel.textContent = ' Password input your password';
      return;
    }

    message = 'User authentication failed';
    if (jsonRes.message === message) {
      passwordLabel.style.color = 'red';
      passwordLabel.textContent = ' Incorrect password';
      return;
    }

    localStorage.setItem('token', jsonRes.token);

    const jwtDecode = (t) => {
      const token = {};
      token.raw = t;
      token.header = JSON.parse(window.atob(t.split('.')[0]));
      console.log('token', token.header);
      token.payload = JSON.parse(window.atob(t.split('.')[1]));
      return (token);
    };

    const { token } = jsonRes;
    console.log('tok', token);
    const decoded = jwtDecode(token);

    if (decoded.payload.payload.role === 'admin') {
      window.location.assign('sales-record-admin.html');
      return;
    }
    window.location.assign('products.html');
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('.login-div').addEventListener('submit', login);
// document.querySelector('#email').addEventListener('click', removeError);
// document.querySelector('#password').addEventListener('click', removeError);
