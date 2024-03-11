// const clickLike = document.querySelector("#fa-regular");
// const clickLiken = document.querySelector("#fa-solid");
// clickLike.addEventListener(('click'), (e) => {
//     e.preventDefault()
//     clickLike.style.display = 'none';
//     clickLiken.style.display = 'block';
    
// })

const getUrlFromPage = window.location.href
const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
const id = geturlParams.get('id')
async function fetchSingleBlog(){
    const singleBlog = await fetch(`https://brand-backend-side.onrender.com/post/getsinglepost/${id}`)
    const blog = await singleBlog.json();
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
    

}
fetchSingleBlog()

async function postComment(){
        const receivedInput = document.getElementById('comment-input').value;
        console.log(receivedInput)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const customization = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                commentMessage: receivedInput
            })
        }
        try{
            await fetch('https://brand-backend-side.onrender.com/api/postcomment', customization)
            receivedInput.value=""
            alert(`Your Comment has been posted!`)
        } catch(err){
            console.log(err)
        }
}


async function fetchingComment(){
    const container = document.getElementById('mainCommentContainer')
    try{
        const res = await fetch('https://brand-backend-side.onrender.com/api/getallcomment', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        console.log("-------------------------", data.data)
        const commentNumber = document.getElementById('comment-count')
        commentNumber.textContent = data.data.length + " comments"
        let elem = ``
        data.data.forEach((comment)=>{
            elem += `
            <div style="display: flex; margin-top: 40px">
                <img src="../images/unknown.png" alt=image style="width: 50px; height: 50px; margin-top: 10px; border: 2px solid black ; border-radius: 50%"/>
                <div style="margin-left: 20px">
                    <span>@bloguser</span>
                    <span>2 days</span>
                    <p style="margin-top: 10px; margin-bottom: 20px">${comment.commentMessage}</p>
                    <div class="doc">
                        <span><i class="fa-regular fa-heart" style="color: black;cursor:pointer" onclick="like()" id="like"></i></span>
                        <span style="margin-top: 30px; margin-left: 10px"><i class="fa-solid fa-comment" style="margin-left: 20px;cursor:pointer"></i></span>
                        <span><i class="fa-solid fa-share" style="margin-left: 20px;cursor: pointer"></i></span>
                        <span style="margin-left: 10px; font-size: 17px; position: relative; bottom: 5px;cursor:pointer">Reply</span>
                    </div>
                </div>
            </div>
            `
        })
        container.innerHTML = elem
    
    } catch(err){
        console.log(err)
    }  
}
fetchingComment()

async function like(){
    const likeIcon = document.getElementById('like')
    likeIcon.className = 'fa-solid fa-heart'
    
}
document.querySelector('.fa-solid').addEventListener(('click'), (e) => {
    e.preventDefault()
    const likeIcon = document.getElementById('like')
    likeIcon.className = 'fa-regular fa-heart'
    
})


