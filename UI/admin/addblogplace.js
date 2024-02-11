//quilljs


//customization of the toolbar 
let toolbarFunctionality = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean']

]



let quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarFunctionality
    },
    theme: 'snow'
})
function workingWithContent(){
    var content = quill.root.textContent;
    document.getElementById('content').value = content;
}


quill.on('text-change', function() {
    workingWithContent()
});




//end of quilljs



//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}



document.getElementById("submit").addEventListener(('click'), (e) => {
    e.preventDefault()
    addBlogs()
    // newAddedBlog()
    
})
// Check if there is existing data in local storage
let blog = JSON.parse(localStorage.getItem("blogContent")) || [];

function addBlogs() {
    let newTitle = document.getElementById("title").value;
    let newContent = quill.root.textContent;
    let newDescription = document.getElementById("description").value;
    let newBlog = {
        id: blog.length + 1,
        title: newTitle,
        content: newContent,
        description: newDescription,
        updatedAt: new Date().toLocaleString()
    };
    blog.push(newBlog);
    
    // Update the local storage with the modified blog array
    localStorage.setItem("blogContent", JSON.stringify(blog));
    console.log(blog)
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





























