const clickLike = document.querySelector("#fa-regular");
const clickLiken = document.querySelector("#fa-solid");
clickLike.addEventListener(('click'), (e) => {
    e.preventDefault()
    clickLike.style.display = 'none';
    clickLiken.style.display = 'block';
    
})

const getUrlFromPage = window.location.href
const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
const id = geturlParams.get('id')
console.log("hello world")
console.log("----------------------------",id);
async function fetchSingleBlog(){
    const singleBlog = await fetch(`https://brand-backend-side.onrender.com/post/getsinglepost/${id}`)
    const blog = await singleBlog.json();
    console.log(blog.data)
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
    console.log("hello world")
    const getIntroduction = document.getElementById("introd")
    getIntroduction.innerHTML = blog.data.introduction
    const displayContent = document.getElementById('main-content-of-blog')
    displayContent.innerHTML = blog.data.content
    // get container of the image from html

    const displayImage = document.getElementById('api-introduction')
    const image = document.createElement('img')
    image.src = blog.data.image
    image.alt = ""
    image.style.width = "500px"
    image.style.height = "666.66px"
    image.style.margin = "auto"
    displayImage.append(image)
    console.log("--------------",blog.data.image)
    

}
fetchSingleBlog()
