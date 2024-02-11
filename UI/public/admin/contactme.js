//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}


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


const syncedImages = document.querySelectorAll('.synced-image');
const inputImage = document.getElementById('input-file');

function updateAllImages(sourceSrc) {
    syncedImages.forEach(image => {
        image.src = sourceSrc;
    });
    localStorage.setItem("storedImage", sourceSrc);
}

let img = localStorage.getItem("storedImage");
if (img) {
    updateAllImages(img);
}

inputImage.onchange = function () {
    const sourceSrc = URL.createObjectURL(inputImage.files[0]);
    updateAllImages(sourceSrc);
}









