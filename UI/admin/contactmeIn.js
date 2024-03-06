let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//allow authorized user to access my dashboard

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    async function fetchingData(){
        //retrieve token from local storage
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', `Bearer ${token.token}`)
        const getToken = {
            method: 'GET',
            headers: headers
        }
        try {
            const response = await fetch("https://brand-backend-side.onrender.com/contact/contactmessage", getToken)
            const data = await  response.json()
            console.log(data.messages)
            let element = '';
            const messageObj = data.messages
            messageObj.forEach((message)=>{
                element += `
           
                <tr>
                    <td>${message.fullName}</td>
                    <td>${message.email}</td>
                    <td>${message.message}</td>
                    <td>
                        <a href="mailto:${message.email}" class="reply-button" style="color: black; text-decoration: none;">Reply</a>
                    </td>
                </tr>
               
                `
            })
            document.getElementsByTagName('tbody')[0].innerHTML=element;


        } catch(err){
            console.log(err)
        }
    }
    fetchingData()
})
// function replyEmail(){
//     window.location.href = "https://mail.google.com";

// }

