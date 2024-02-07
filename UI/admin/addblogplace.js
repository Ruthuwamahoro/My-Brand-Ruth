//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}



document.getElementById("blog-Form").addEventListener(('submit'), (e) => {
    e.preventDefault()
    addBlogs()
    // newAddedBlog()
    
})
// Check if there is existing data in local storage
let blog = JSON.parse(localStorage.getItem("blogContent")) || [];

function addBlogs() {
    let newTitle = document.getElementById("title").value;
    let newContent = document.getElementById("content").value;
    let newDescription = document.getElementById("description").value;
    let newBlog = {
        id: blog.length + 1,
        title: newTitle,
        content: newContent,
        description: newDescription
    };
    blog.push(newBlog);
    
    // Update the local storage with the modified blog array
    localStorage.setItem("blogContent", JSON.stringify(blog));
    
    window.location.href = "./addblogs.html";
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




























