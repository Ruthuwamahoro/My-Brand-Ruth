
const form = document.getElementById("myForm");
const username = document.getElementById("Username");
const password = document.getElementById("password");
const errorMessage = document.getElementById('errorMessage')
const nst = document.getElementById('nst');

document.getElementById('myForm').addEventListener('submit', (e) => {

  
  e.preventDefault();
  errors = [];
  if (username.value.trim() === "") {
    errors.push("Please provide a username");
    username.style.border = '1px solid red';
  }
  if (password.value.trim() === "") {
    password.style.border = '1px solid red';
    errors.push("Please provide a password");
  }
  if (password.value.length < 8) {
    
    errors.push("Your password should  not be less than 8 characters");
  }

  if(errors.length > 0){
   
    errorMessage.textContent = errors.join(', ')

  } else {
    const StorageUsers = {
      username: username.value,
      password: password.value
    }

    localStorage.setItem("StoreUsers", JSON.stringify(StorageUsers));
    const getItem = localStorage.getItem("StoreUsers")
    console.log(JSON.parse(getItem))
    window.location.href = "../admin/dashboard.html"
  }
  
})





















// document.addEventListener("DOMContentLoaded", () => {
      //   const form = document.getElementById("myForm");
      //   const username = document.getElementById("Username");
      //   const password = document.getElementById("password");
      //   const usernameErrorMessage = document.getElementById("usernameError");
      //   const passwordErrorMessage = document.getElementById("emailError");

      //   form.addEventListener("submit", (e) => {
      //     e.preventDefault();
      //     // Reset styles and error messages
      //     username.style.border = "none";
      //     password.style.border = "none";
      //     usernameErrorMessage.textContent = "";
      //     passwordErrorMessage.textContent = "";

      //     if (username.value.trim() === "" || username.value.trim() == null) {
      //       e.preventDefault();
      //       username.style.border = "1px solid red";
      //     } else if (password.value === "" || password.value == null) {
      //       e.preventDefault();
      //       password.style.border = "1px solid red";
      //       passwordErrorMessage.textContent = "Please provide a password";
      //       passwordErrorMessage.style.color = "red";
      //     } else if (password.value.length < 8) {
      //       e.preventDefault();
      //       password.style.border = "1px solid red";
      //       passwordErrorMessage.textContent =
      //         "Your password must be greater than 8 characters";
      //       passwordErrorMessage.style.color = "red";
      //     }
      //     if (password.value && username.value) {
      //       localStorage.setItem("username", username.value);
      //       localStorage.setItem("password", password.value);
      //       window.location.href = "../admin/dashboard.html";
      //     }

      //     // else {
      //     //   localStorage.setItem("username", username.value);
      //     //   localStorage.setItem("password", password.value);
      //     //   window.location.href = "../admin/dashboard.html";
      //     // }
      //   });
      // });
