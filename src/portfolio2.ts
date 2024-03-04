const inputName = document.getElementById('full-name')as HTMLInputElement;
const inputEmail = document.getElementById('email') as HTMLInputElement;
const inputMessage = document.getElementById('message') as HTMLInputElement;
const submission = document.getElementById('send')as HTMLButtonElement;
const errorMessage = document.getElementById('errorProvidedMessage') as HTMLParagraphElement;

submission.addEventListener("click", (e) => {
    e.preventDefault()
    async function fetchingData(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const defineHeaders = {
            method: 'POST',
            headers:headers,
            body: JSON.stringify({fullName:inputName.value, email:inputEmail.value, message:inputMessage.value})
        }
        try{
            const response = await fetch('https://brand-backend-side.onrender.com/contact/contactmessage', defineHeaders)
            const data = await response.json();
            const erro = data.error
            //const n = erro.split(',').map((item:string) => item.trim());
            //console.log(n)
            console.log(erro)
            if(erro){
                errorMessage.style.color = 'red'
                errorMessage.textContent = erro
                
            } else {
                errorMessage.style.display = 'none'
                Notification.requestPermission()
                .then((permis) => {
                    if (permis === 'granted') {
                        const notification = new Notification('New Message', {
                            body: " New Inquiry from contact me",
                            icon: "../UI/admin/images/Myimage.jpg",
                        })
                    }
                })
                inputEmail.value = ""
                inputName.value = ""
                inputMessage.value = ""
            }
            
        } catch(err){
            console.log(err)
        }
        }
    fetchingData()

});

// fetch("http://localhost:8080/contact/contactmessage", {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: inputName.value,
//         email: inputEmail.value,
//         message: inputMessage.value
//     })
// }).then((result) => result.json()).then((data) => console.log(data))