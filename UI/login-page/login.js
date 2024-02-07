
const form = document.getElementById("myForm");
const username = document.getElementById("Username");
const password = document.getElementById("password");
const errorMessage = document.getElementById('errorMessage')
const nst = document.getElementById('nst');

//adding simple padding to the input value"
username.style.paddingLeft = "20px";
password.style.paddingLeft = "20px";


// end of adding basic styles

document.getElementById('myForm').addEventListener('submit', (e) => {

  
  e.preventDefault();
  errors = [];
  if ((username.value.trim() === "") && (password.value.trim() === "")) {
    password.style.border = '1px solid red';
    username.style.border = '1px solid red';
    errors.push("Please provide password and username");
  }
  if (!(username.value.trim() === "") && (password.value.trim() === "")){
    password.style.border = '1px solid red';
    errors.push("Please provide  password");
  }

  if ((username.value.trim() === "") && !(password.value.trim() === "")){
    username.style.border = '1px solid red';
    errors.push("Please provide username");
  }

  if(!(username.value.trim === "") && (password.value.trim === "")){
    errors.push("Please provide a password");
  }
  if (password.value.length < 8 && password.value.trim() > 0) {
    
    errors.push("Your password should  not be less than 8 characters");
  }
  else {
    const StorageUsers = {
      specialUsername: "Ruth",
      specialPassword: "Ruth2001",
      isAuthenticated : true
    }
    localStorage.setItem("StoreUsers", JSON.stringify(StorageUsers));
    let users = JSON.parse(localStorage.getItem("StoreUsers"));
    if((users.specialUsername === username.value) && (users.specialPassword === password.value)){
      users.isAuthenticated = true;
      window.location.href = "../admin/dashboard.html";
      
    }
     else if((users.specialUsername !== username.value) && (users.specialPassword !== password.value)){
      users.isAuthenticated= false;
      errors.push("Username and Password do not match")
     }

     else if((users.specialUsername !== username.value) && (users.specialPassword === password.value)){
      users.isAuthenticated= false;
      console.log(users)
      errors.push("Wrong Username")
    } else if((users.specialUsername === username.value) && (users.specialPassword!== password.value) && (password.value.trim() !=="") && (password.value.length >= 8) && (username.value.trim() !== "")){
      users.isAuthenticated= false;
      console.log(users)
      errors.push("invalid password")
    }
  }
  if(errors.length > 0){
   
    errorMessage.textContent = errors.join(', ')

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
