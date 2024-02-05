const messageObj = JSON.parse(localStorage.getItem('contactMessage')) || [];
let element = '';
function displayInquiry(){
    messageObj.forEach((message)=>{
        element += `
   
        <tr>
            <td>${message.name}</td>
            <td>${message.email}</td>
            <td>${message.message}</td>
            <td>
                <button class="reply-button" onclick="replyEmail()">reply</button>
            </td>
        </tr>
       
        `
    })
    document.getElementsByTagName('tbody')[0].innerHTML=element;
    
}
displayInquiry()

function replyEmail(){
    // let tr = event.target.parentNode.parentNode;
    window.location.href = "https://mail.google.com";


}

