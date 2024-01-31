// const form = document.getElementById("myForm");
// const username = document.getElementById("Username");
// const password = document.getElementById("password");
// const usernameErrorMessage = document.getElementById("usernameError");
// const passwordErrorMessage = document.getElementById("emailError");
// const ContainerLocalStorage = document.getElementById("local-storage-container")
// const tableRow = document.getElementById('table-row"')
// form.addEventListener("submit", (e) => {
//   // errors = [];
//   // if (username.value.trim() === "") {
//   //   errors.push("Please provide a username");
//   // }
//   // if (password.value.trim() === "") {
//   //   errors.push("Please provide a password");
//   // }
//   // if (password.value.length < 8) {
//   //   errors.push("Your password should  not be less than 8 characters");
//   // }
//   // console.log(errors);
//   // if (errors.length > 0) {
//   //   e.preventDefault();
//   //   for(let i=0; i<errors.length; i++){
//   //     if(errors[i] == "Please provide a username"){
//   //       username.style.border = "1px solid red";
//   //       usernameErrorMessage.innerHTML = errors[i];
//   //       return false
//   //     } else if (errors[i] == "Please provide a password"){
//   //       passwordErrorMessage.innerHTML = errors[i]
//   //       password.style.border = "1px solid red";
//   //       passwordErrorMessage.style.color = "red";
//   //       return false
//   //     } else if (errors[i] == "Your password should  not be less than 8 characters"){
//   //       passwordErrorMessage.innerHTML = errors[i];
//   //       passwordErrorMessage.style.color = "red";
//   //       return false
//   //     }else{
//   //       passwordErrorMessage.innerHTML = "";
//   //       username.style.border = "none";
//   //       password.style.border = "none";
//   //     }
//   //   } 
//   // }

//   // else if(errors.length < 0){
//   //   localStorage.setItem("name", username.value);
//   //   localStorage.setItem("password", password.value);
//   //   console.log("redirecting to the admin page");
//   //   window.location.href = "../admin/dashboard.html";
//   //   console.log(username.value)
//   //   console.log(password.value)
//   // }



//   e.preventDefault();
//   console.log(username.value)
//   console.log(password.value)

//   let storedUsername = localStorage.setItem("username", username.value);
//   let storedPassword = localStorage.setItem("password", password.value);
//   tableRow.innerHTML = `<td>${JSON.parse(localStorage.getItem(storedPassword))}</td><td>${JSON.parse(localStorage.getItem(stored))}</td>`


  
  
// });


const form = document.getElementById("myForm");
const username = document.getElementById("Username");
const password = document.getElementById("password");
const usernameErrorMessage = document.getElementById("usernameError");
const passwordErrorMessage = document.getElementById("emailError");
const message = document.getElementById('message')
const errorMessage = document.getElementById('errorMessage')


document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  errors = [];
  if (username.value.trim() === "") {
    errors.push("Please provide a username");
    username.classList.add('errorStyle')
  }
  if (password.value.trim() === "") {
    password.classList.add('errorStyle')
    errors.push("Please provide a password");
  }
  if (password.value.length < 8) {
    
    errors.push("Your password should  not be less than 8 characters");
  }

  if(errors.length > 0){
   
    errorMessage.textContent = errors.join(',')

  }
  window.location.href = "../admin/dashboard.html"
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