"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quill_1 = __importDefault(require("quill"));
let toolbarFunctionality = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean']
];
let quill = new quill_1.default('#editor-container', {
    modules: {
        toolbar: toolbarFunctionality
    },
    theme: 'snow'
});
function workingWithContent() {
    var content = quill.root.textContent;
    const getIn = document.getElementById('content');
    getIn.value = content;
}
quill.on('text-change', function () {
    workingWithContent();
});
let us = localStorage.getItem("StoreUsers");
let users = us ? JSON.parse(us) : [];
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}
document.getElementById("submit").addEventListener(('click'), (e) => {
    e.preventDefault();
    addBlogs();
});
let retrieveBlog = localStorage.getItem("blogContent");
let blog = retrieveBlog ? JSON.parse(retrieveBlog) : [];
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
    localStorage.setItem("blogContent", JSON.stringify(blog));
    console.log(blog);
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
};
//# sourceMappingURL=addblogplace1.js.map