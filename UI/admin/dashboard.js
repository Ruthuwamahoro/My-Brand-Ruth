//authentication to this page
let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//displaying number of blogs posted
const numberOfBlog = document.getElementById("numberOfBlogs");
//retrieving the stored blogs
const getToken = token.token

const blog = fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken}`
    }
}).then((data) => data.json()).then((res) => {
    const num = res.data.length
    console.log(res.data)
    numberOfBlog.textContent = num
    const displayBlogOverview = document.getElementById("blog-container-overview");
    let elem = ``
    //const getTime = new Date(res.data.created_at)
    res.data.forEach((record) => {
        elem += `
            <div>
                <h3>${record.title}</h3>
                <p><span>Published Date:</span> <span>Jan 15,2023</span></p>
                <p><span>Coments:</span> <span><a href="" style="color: black;"><i class="fa-solid fa-comment-dots"></i></a></span></p>
                <p><span>Likes:</span> <span><a href="" style="color: black;">
                    <i class="fa-solid fa-thumbs-up"></i>
                </a></span></p>
            </div>
        `
    })
    displayBlogOverview.innerHTML = elem


})

//adding some styles


numberOfBlog.style.paddingRight = "10px";
numberOfBlog.style.color = "#2B3097";
numberOfBlog.style.fontWeight = "bolder";
numberOfBlog.style.fontSize = "30px";

//end of displaying number of blogs



//displaying number of contact Inquires

const numberOfInquires = document.getElementById("inq");
const inquires = fetch('https://brand-backend-side.onrender.com/contact/contactmessage', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken}`
    }
}).then((res) => res.json()).then((data) => {
    numberOfInquires.textContent = data.messages.length
})
numberOfInquires.textContent = inquires.length;
//adding some styles

numberOfInquires.style.color = "#2B3097";
numberOfInquires.style.fontWeight = "bolder";
numberOfInquires.style.fontSize = "30px";


