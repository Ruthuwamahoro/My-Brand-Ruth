//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//displaying number of blogs posted
const numberOfBlog = document.getElementById("numberOfBlogs");
//retrieving the stored blogs

const blog = JSON.parse(localStorage.getItem('blogContent')) || [];
numberOfBlog.textContent = blog.length;
//adding some styles


numberOfBlog.style.paddingRight = "10px";
numberOfBlog.style.color = "#2B3097";
numberOfBlog.style.fontWeight = "bolder";
numberOfBlog.style.fontSize = "30px";

//end of displaying number of blogs



//displaying number of contact Inquires

const inquires = JSON.parse(localStorage.getItem("contactMessage")) || [];
const numberOfInquires = document.getElementById("inq");
numberOfInquires.textContent = inquires.length;
//adding some styles

numberOfInquires.style.color = "#2B3097";
numberOfInquires.style.fontWeight = "bolder";
numberOfInquires.style.fontSize = "30px";


