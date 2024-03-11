const clickLike = document.querySelector("#fa-regular");
const clickLiken = document.querySelector("#fa-solid");
clickLike.addEventListener(('click'), (e) => {
    e.preventDefault()
    clickLike.style.display = 'none';
    clickLiken.style.display = 'block';
    
})

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    async function fetchingBlog(){

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const customizing = {
            method: 'GET',
            headers: headers
        }
        const res = await fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', customizing)
        const response = await res.json()
        const blog = response.data
        if(blog){
            
        }
        const blogTitle = document.getElementById('blogTit')
        const blogWelcomeMessg = document.querySelector('.additional-info')
        const time = document.getElementById('dateCreated')
        const getIntroduction = document.getElementById("introd")
        blog.forEach((blog)=>{
            blogTitle.innerHTML = blog.title
            blogWelcomeMessg.innerHTML = blog.welcomeIntro;
            getIntroduction.innerHTML =  blog.introduction
            const date = blog.created_at.split('-')[2].split('T')[0]
            const month = blog.created_at.split('-')[1]
            const  year = blog.created_at.split('-')[0]
            const currentTime = ` ${month} /${date}/${year}`
            time.innerHTML = currentTime

        })
    }
    fetchingBlog()

})
