let signupform = document.getElementById("login");

signupform.addEventListener("submit", (e) => {

  e.preventDefault();

  let email = document.getElementById("username");
  let password = document.getElementById("password");

  let userRequest = {
    "username": email.value,
    "password": password.value
  }

  console.log(userRequest);

  let url = "http://localhost:8080/elibrary/registerUser";

  fetch(url, {
    'method': 'POST',
    'body': JSON.stringify(userRequest),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.text())
  .then(response => {
     let responseSpace = document.getElementById("response-div");
     responseSpace.innerHTML = response;
  })
  .catch(error => {
    console.log(error);
  })

})