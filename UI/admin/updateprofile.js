let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
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




