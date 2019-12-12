const baseURL = 'http://localhost:4000';
const signUp = async (event) => {
  event.preventDefault();
  const email = document.querySelector('input[type="text"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();
  const email1 = document.querySelector('[for="email"]');
  const password1 = document.querySelector('[for="password"]');

  try {
    const result = await fetch(`${baseURL}/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const resJson = await result.json();
    console.log('signup', resJson);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('.signup-form').addEventListener('submit', signUp);
