document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('Username');
    const loginButton = document.getElementById('submit')
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    console.log(username.value)
    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        async function fetchingData(){
            const headers = new Headers()
            headers.append('Content-Type', 'application/json')
            headers.append('Accept', 'application/json')
            const accessHeader = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({username: username.value, password: password.value})
            }
            console.log(accessHeader)
            try{
                const response = await fetch('http://localhost:8080/logininfo/login', accessHeader)
                const data = await response.json()
                if(data.status === 'ok'){
                    localStorage.setItem('token', JSON.stringify({ token : data.token}));
                    window.location.href='../admin/dashboard.html'
                } else {
                    errorMessage.textContent = data.error
                    console.log(data)
                }
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        fetchingData()

    })
    
}) 
