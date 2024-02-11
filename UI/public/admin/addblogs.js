//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}


document.getElementById('container').style.display = 'none'
function displayBlog(){
    const blog = JSON.parse(localStorage.getItem('blogContent'));
    const emptyBlog = document.querySelector('.empty-blog');
    const mainDiv = document.getElementById('blogs-container-actions');
    const updateBlogHtml = document.getElementById('addblog-container')
    updateBlogHtml.style.display = 'none';
    let elements = "";
    if(blog.length == 0){
        emptyBlog.style.display = 'block'
        mainDiv.style.display = 'none'
    } else 
    {   emptyBlog.style.display = 'none'
        blog.map((record) => {
            //creating div for storage
            elements += `<div class="main-container">
                <div class="container-action">
                    <p id="title"> ${record.title}</p>
                    <button class="update-btn" onclick={update(${record.id})}>UPDATE</button>
                    <button class="delete-btn" onclick=deleteBlog(${record.id})>DELETE</button>
                </div>
            </div>`
            
            
        })
        mainDiv.innerHTML = elements
    }
}

displayBlog()

function update(id){
    const blog = JSON.parse(localStorage.getItem('blogContent'));
    document.getElementById('blogs-section').style.display = 'none';
    document.querySelector('#addblog-container').style.display = 'block';
    let obj = blog.find(rec => rec.id === id);
    document.getElementById('utitle').value = obj.title;
    document.getElementById('ucontent').value = obj.content;
    document.getElementById('udescription').value = obj.description;
    document.querySelector('.id').value = obj.id;  
}

function edit(){
    const blog = JSON.parse(localStorage.getItem('blogContent'));
    let newId = parseInt(document.querySelector('.id').value);
    let newTitle = document.getElementById('utitle').value;
    let newContent = document.getElementById('ucontent').value;
    let newDescription = document.getElementById('udescription').value;
    if(!newTitle || !newContent){
        console.error("Title or content is not found");
        return;
    }
    let dataIndex = blog.findIndex(rec => rec.id === newId);

    blog[dataIndex] = {id:newId, title:newTitle,content:newContent, description:newDescription};
    localStorage.setItem('blogContent', JSON.stringify(blog));

    document.querySelector('#addblog-container').style.display = 'none';
    document.getElementById('blogs-section').style.display = 'block';
    displayBlog()
    console.log(blog)
}



document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    edit()
})


function deleteBlog(id){
    const blog = JSON.parse(localStorage.getItem('blogContent'));
    const deleteMessage = document.getElementById('container');
    deleteMessage.style.display = 'block';
    if(deleteMessage){
        document.getElementById('navigation-menu-section').classList.add('body-opacity');
        document.getElementById('navigation-link-container').classList.add('body-opacity');
        document.getElementById('blogs-section').classList.add('body-opacity');
        document.getElementById('addblog-container').classList.add('body-opacity');

    }
    document.getElementById('cancel-button').addEventListener(('click'), (e) => {
        e.preventDefault()
        deleteMessage.style.display = 'none';
        document.getElementById('navigation-menu-section').classList.remove('body-opacity');
        document.getElementById('navigation-link-container').classList.remove('body-opacity');
        document.getElementById('blogs-section').classList.remove('body-opacity');
        document.getElementById('addblog-container').classList.remove('body-opacity');
    })
    document.getElementById('del').addEventListener('click', (e) => {
        e.preventDefault()
        const dataIndex = blog.findIndex(rec => rec.id === id);
        if (dataIndex !== -1) {
            blog.splice(dataIndex, 1);
            localStorage.setItem('blogContent', JSON.stringify(blog));
            deleteMessage.style.display = 'none';
            document.getElementById('navigation-menu-section').classList.remove('body-opacity');
            document.getElementById('navigation-link-container').classList.remove('body-opacity');
            document.getElementById('blogs-section').classList.remove('body-opacity');
            document.getElementById('addblog-container').classList.remove('body-opacity');
            displayBlog();
        } 
        else {
            console.error("Blog with the specified ID not found.");
        }
    })
    
    

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
























