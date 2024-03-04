const username = document.getElementById('Username').value;
const password = document.getElementById('password').value;
const errorMessage = document.getElementById('errorMessage')
const loginButton = document.getElementById('submit')

loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username,
        password: password
    }
    fetch('http://localhost:8080/logininfo/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify(data)
    }).then((re) => {
        re.json()
    }).then((response) => {
        console.log(response)
    })
})







    // .then((result) => result.json()).then((response)=>{
    //     if(response.){
    //         const result = response.token
    //         localStorage.setItem('token', JSON.stringify({ token : response.token}));
    //         window.location.href = "../admin/dashboard.html"
    //         console.log(result)
    //     }
    //     else {
    //         errorMessage.textContent = response.error
    //     }
    // })
