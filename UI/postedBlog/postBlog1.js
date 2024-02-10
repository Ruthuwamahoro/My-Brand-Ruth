//first retrieve blogs content stored in \localstorage
const blogContent = localStorage.getItem("blogContent");
console.log("Stored blog content:", blogContent);
const blogs = JSON.parse(blogContent) || [];
console.log("Parsed blogs:", blogs);
