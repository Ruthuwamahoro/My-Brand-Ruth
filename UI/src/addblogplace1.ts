//quilljs
import Quill from 'quill'


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
let quill: Quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarFunctionality
    },
    theme: 'snow'
})
function workingWithContent(){
    var content = quill.root.textContent;
    const getIn = document.getElementById('content')!
    getIn.value = content!;
}

quill.on('text-change', function() {
    workingWithContent()
});

//end of quilljs

//authentication to this page

interface user {
    specialUsername: string
    specialPassword: string
    isAuthenticated: boolean
}
let us: string | null = localStorage.getItem("StoreUsers");
let users:user = us? JSON.parse(us) : []
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}
document.getElementById("submit")!.addEventListener(('click'), (e) => {
    e.preventDefault()
    addBlogs() 
})


// Check if there is existing data in local storage
interface blo{
    id: number;
    title: string;
    description: string;
    content: string;
    updatedAt: string;

}
let retrieveBlog = localStorage.getItem("blogContent")
let blog:blo[] = retrieveBlog ? JSON.parse(retrieveBlog) : [];
function addBlogs() {
    let newTitle = (document.getElementById("title") as HTMLInputElement).value;
    let newContent = quill.root.textContent;
    let newDescription = (document.getElementById("description") as HTMLInputElement).value;
    let newBlog: blo = {
        id: blog.length + 1,
        title: newTitle,
        content: newContent!,
        description: newDescription,
        updatedAt: new Date().toLocaleString()
    };
    blog.push(newBlog);
    
    // Update the local storage with the modified blog array
    localStorage.setItem("blogContent", JSON.stringify(blog));
    console.log(blog)
    window.location.href = "./addblogs.html";
}







const syncedImages = document.querySelectorAll('.synced-image') as NodeListOf<HTMLImageElement>;
const inputImage = document.getElementById('input-file') as HTMLInputElement;

function updateAllImages(sourceSrc:string) {
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
    const sourceSrc = URL.createObjectURL(inputImage.files![0]);
    updateAllImages(sourceSrc);
}