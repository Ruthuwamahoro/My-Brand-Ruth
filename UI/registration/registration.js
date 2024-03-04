const email = document.getElementById("email");
const username = document.getElementById('Username');
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('submit')
const errorMessage = document.getElementById('errorMessage')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const data =  {
        email: email.value,
        username: (typeof username.value === 'string') ? username.value : "", 
        password: password.value,
        ConfirmPassword: ConfirmPassword.value

    }

    fetch('http://localhost:8080/logininfo/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((result) => result.json()).then((response)=>{
            if(response.redirectTo){
                window.location.href = response.redirectTo
            } else {
                errorMessage.textContent = response.error
            }
    }).catch((err) => console.log("Err:", err))
})

