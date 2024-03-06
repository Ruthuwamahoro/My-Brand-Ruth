const inputName = document.getElementById('full-name')as HTMLInputElement;
const inputEmail = document.getElementById('email') as HTMLInputElement;
const inputMessage = document.getElementById('message') as HTMLInputElement;
const submission = document.getElementById('send')as HTMLButtonElement;
const errorMessage = document.getElementById('errorProvidedMessage') as HTMLParagraphElement;

submission.addEventListener("click", (e) => {
    e.preventDefault()
    async function fetchingData(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const defineHeaders = {
            method: 'POST',
            headers:headers,
            body: JSON.stringify({fullName:inputName.value, email:inputEmail.value, message:inputMessage.value})
        }
        try{
            const response = await fetch('https://brand-backend-side.onrender.com/contact/contactmessage', defineHeaders)
            const data = await response.json();
            const erro = data.error
            //const n = erro.split(',').map((item:string) => item.trim());
            //console.log(n)
            console.log(erro)
            if(erro){
                errorMessage.style.color = 'red'
                errorMessage.textContent = erro
                
            } else {
                errorMessage.style.display = 'none'
                Notification.requestPermission()
                .then((permis) => {
                    if (permis === 'granted') {
                        const notification = new Notification('New Message', {
                            body: " New Inquiry from contact me",
                            icon: "../UI/admin/images/Myimage.jpg",
                        })
                    }
                })
                inputEmail.value = ""
                inputName.value = ""
                inputMessage.value = ""
            }
            
        } catch(err){
            console.log(err)
        }
        }
    fetchingData()

});


async function displayBlog(){
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const getToken = token.token
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${getToken}`);
    const customization = {
        method: 'GET',
        headers: headers
    }
    try{
        const response = await fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', customization)
        const blogs = await response.json();
        console.log(blogs.data[0])
        const blog = blogs.data
        if(blog[0] && blog[1]){
            const getContainer = document.querySelector('.container-blog.blog1') as HTMLDivElement
            let makeNewBlogArr = []
            const firstBlo = blog[0]
            const secondBlo = blog[1]
            makeNewBlogArr.push(firstBlo, secondBlo)
            let elem = ''
            makeNewBlogArr.forEach((rec: any) => {
                elem += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
    
                `
            })
            getContainer.innerHTML = elem
        }

        if(blog[2] && blog[3]){
            const getContainer = document.querySelector('.container-blog.blog2') as HTMLDivElement

            let makeNewBlogArr = []
            const firstBlo = blog[2]
            const secondBlo = blog[3]
            makeNewBlogArr.push(firstBlo, secondBlo)
            let elem = ''
            makeNewBlogArr.forEach((rec: any) => {
                elem += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
    
                `
            })
            getContainer.innerHTML = elem
        }
        if(blog[4] && blog[5]){
            const getContainer = document.querySelector('.container-blog.blog3') as HTMLDivElement

            let makeNewBlogArr = []
            const firstBlo = blog[4]
            const secondBlo = blog[5]
            makeNewBlogArr.push(firstBlo, secondBlo)
            console.log(makeNewBlogArr)
            let elem = ''
            makeNewBlogArr.forEach((rec: any) => {
                elem += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
    
                `
            })
            getContainer.innerHTML = elem
        }

    } catch(error){
        console.log(error)
    }
}
displayBlog()


async function displayProjectsInPage(){
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const getToken = token.token
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${getToken}`);
    const customization = {
        method: 'GET',
        headers: headers
    }
    const project = await fetch('https://brand-backend-side.onrender.com/project/getallprojects', customization)
    const n = await project.json()
    const projectstored = n.projects
    console.log("-------------",projectstored)
    let projectContainer = document.querySelector(".projects-section-container") as HTMLDivElement; 
    let elem = "";
    projectstored.forEach((pro: any) => {
        elem += `
        <div class="project-div3 single-project">
            <h1>${pro.title}</h1>
            <p>${pro.description}</p>
            <button ><a href="${pro.demoLink}">Demo</a></button>
        </div>
        `
    })
    projectContainer.innerHTML = elem;

}
displayProjectsInPage()
