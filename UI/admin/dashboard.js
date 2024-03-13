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
    numberOfBlog.textContent = num
    const displayBlogOverview = document.getElementById("blog-container-overview");
    let elem = ``
    let getTotalLikesInOneComment = 0


    
    res.data.forEach((record, index) => {
        let usernames = [];
        let messages = [];
        let noticeMessg = []
        const thewholeInfo = []
        record.comments.forEach((comment) => {
            //getting likes
            getTotalLikesInOneComment += comment.likes.length
            //getting blogs
            const username = comment.username
            const message = comment.commentMessage
            usernames.push(username)
            messages.push(message)
        })

        if(usernames.length === 0){
            thewholeInfo.push('No Comments')
        } else if(thewholeInfo.length < 2){
            for(let x=0; x<usernames.length && x<messages.length; x++){
                thewholeInfo.push(`<br> ${usernames[x]} - ${messages[x]}`)
            }
           
        }
        
        const getDate = record.created_at
        const date = getDate.split('-')[2].split('T')[0]
        const month = getDate.split('-')[1]
        const  year = getDate.split('-')[0]
        const currentTime = ` ${date} /${month}/${year}`
        
        elem += `
            <div>
                <h3>${record.title}</h3>
                <p><span>Published Date:</span> <span>${currentTime}</span></p>
                <p><span>Coments:</span> <span><a href="" style="color: black">${record.comments.length}</a></span></p>
                <a href="" id="seeingComment" style="color: blue;font-weight:900px;text-decoration:none">read more...</a>
                <p id="seecomments" style="display:none; font-weight:bolder">${thewholeInfo}</p></br>
                
                <p><span>Likes:</span> <span><a href="" style="color: black;font-weight:900px">
                ${getTotalLikesInOneComment}
                </a></span></p>
                <div class="comment-section"></div>
            </div>
        `
        console.log('-----------', record.comments)
    })
    displayBlogOverview.innerHTML = elem
    // bellow is the data to diaplay
    const getComments = document.querySelectorAll("#seecomments")
    //bellow is the button to click
    const clickToDisplay = document.querySelectorAll("#seeingComment")
    console.log(clickToDisplay)
    console.log(getComments)

    for(let x=0; x<clickToDisplay.length; x++){
        clickToDisplay[x].addEventListener('click', (e)=>{
            e.preventDefault()
            if(getComments[x].style.display == "none"){
                getComments[x].style.display = "block"
            }
            else{
                getComments[x].style.display = "none"
            }
        })
    }

})






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


