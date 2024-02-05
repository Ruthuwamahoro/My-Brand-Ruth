document.getElementById("blog-Form").addEventListener(('submit'), (e) => {
    e.preventDefault()
    addBlogs()
})
// Check if there is existing data in local storage
let blog = JSON.parse(localStorage.getItem("blogContent")) || [];

function addBlogs() {
    let newTitle = document.getElementById("title").value;
    let newContent = document.getElementById("content").value;
    let newBlog = {
        id: blog.length + 1,
        title: newTitle,
        content: newContent
    };
    blog.push(newBlog);

    // Update the local storage with the modified blog array
    localStorage.setItem("blogContent", JSON.stringify(blog));
    window.location.href = "./addblogs.html";
}




















