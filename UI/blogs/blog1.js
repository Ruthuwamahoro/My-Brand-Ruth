const getUrlFromPage = window.location.href
const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
const id = geturlParams.get('id')
const storeId = localStorage.setItem('blogId', id)
const getId = localStorage.getItem('blogId')
const token = JSON.parse(localStorage.getItem("token"));
const accessToken = token?.token
async function fetchSingleBlog(){
    const singleBlog = await fetch(`https://brand-backend-side.onrender.com/post/getsinglepost/${id}`)
    const blog = await singleBlog.json();
    console.log(blog)
    const blogTitle = document.getElementById('blogTit')
    //display title
    blogTitle.innerHTML = blog.data.title
    const blogWelcomeMessg = document.querySelector('.additional-info')
    //display welcome message
    blogWelcomeMessg.innerHTML = blog.data.welcomeIntro
    const time = document.getElementById('dateCreated')
    const date = blog.data.created_at.split('-')[2].split('T')[0]
    const month = blog.data.created_at.split('-')[1]
    const  year = blog.data.created_at.split('-')[0]
    const currentTime = ` ${month} /${date}/${year}`
    //display time
    time.innerHTML = currentTime
    const getIntroduction = document.getElementById("introd")
    getIntroduction.innerHTML = blog.data.introduction
    const displayContent = document.getElementById('main-content-of-blog')
    displayContent.innerHTML = blog.data.content
    const displayImage = document.getElementById('api-introduction')
    const image = document.createElement('img')
    image.src = blog.data.image
    image.alt = ""
    image.style.width = "500px"
    image.style.height = "666.66px"
    image.style.margin = "auto"
    displayImage.append(image)
    //display comments
    console.log("-------------", blog.data["comments"])
    const container = document.getElementById('mainCommentContainer')
    const commentNumber = document.getElementById('comment-count')
    commentNumber.textContent = blog.data["comments"].length + " comments"
    let elem = ``
    blog.data["comments"].forEach((comment)=>{
        elem += `
        <div style="display: flex; margin-top: 40px">
            <img src="../images/unknown.png" alt=image style="width: 50px; height: 50px; margin-top: 10px; border: 2px solid black ; border-radius: 50%"/>
            <div style="margin-left: 20px">
                <span>${comment.username}</span>
                <span>2 days</span>
                <p style="margin-top: 10px; margin-bottom: 20px">${comment.commentMessage}</p>
                <div class="doc">
                    <span id="like-cont"><i class="fa-regular fa-heart" style="color: black;cursor:pointer" id="like"></i></span>
                    <span style="margin-top: 30px; margin-left: 10px"><i class="fa-solid fa-comment" style="margin-left: 20px;cursor:pointer"></i></span>
                    <span><i class="fa-solid fa-share" style="margin-left: 20px;cursor: pointer"></i></span>
                    <span style="margin-left: 10px; font-size: 17px; position: relative; bottom: 5px;cursor:pointer">Reply</span>
                </div>
            </div>
        </div>
        `
    })
    container.innerHTML = elem

    const changeIcon = document.querySelectorAll('#like')
    let count = 0
    for(let x = 0; x < changeIcon.length; x++){
        console.log(changeIcon[x].className)
        changeIcon[x].addEventListener(('click'), ()=> {
            const getCommentId = blog.data["comments"][x]._id
            console.log(getCommentId)
            fetch(`https://brand-backend-side.onrender.com/api/comment/${getCommentId}/postlike`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({count})
            }).then(() => {
                if(changeIcon[x].className === 'fa-regular fa-heart'){
                    changeIcon[x].className = 'fa-solid fa-heart'
                    count = count + 1
                } 
                else if(changeIcon[x].className === 'fa-solid fa-heart'){
                    changeIcon[x].className = 'fa-regular fa-heart'
                }
            })
        })  
        
    }

}
fetchSingleBlog()

document.getElementById('submit-comment').addEventListener(('click'), () => {
    postComment()
})


async function postComment(){
    const receivedInput = document.getElementById('comment-input').value;
    const token = JSON.parse(localStorage.getItem("token"));
    if(!token){
        alert("Please login to post comment")
        window.location.href = '../login-page/login.html'
    }
    const accessToken = token.token
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append(`Authorization`, `Bearer ${accessToken}`)
    const data = {
        commentMessage: receivedInput
    }
    const customization = {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(data)

    }
    console.log(customization)
    try{
        const res = await fetch(`https://brand-backend-side.onrender.com/api/blog/${getId}/postcomment`, customization)
        const data = await res.json()
        console.log(data);
    } catch{
        console.log(err)
    }

}



