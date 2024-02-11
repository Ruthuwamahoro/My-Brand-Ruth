"use strict";
const menu = document.getElementById("menu");
const ul = document.querySelector(".display-menu");
menu.addEventListener("click", (e) => {
    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        e.preventDefault();
        ul.classList.toggle("show-menu");
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    if (menu.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        menu.addEventListener("click", () => {
            ul.classList.remove("display-menu");
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    }
});
const blogsContent = localStorage.getItem("blogContent");
const blogs = blogsContent ? JSON.parse(blogsContent) : null;
const blogContainer = document.querySelector(".container-blog");
if (blogs) {
    if (blogs[0] && blogs[1]) {
        let upDatedBlog = [];
        let firstBlog = blogs[0];
        let secondBlog = blogs[1];
        upDatedBlog.push(firstBlog, secondBlog);
        console.log(upDatedBlog);
        const blogContainer = document.querySelector(".container-blog.blog1");
        let element = "";
        upDatedBlog.forEach((rec) => {
            element += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
                
                `;
        });
        blogContainer.innerHTML = element;
    }
    if (blogs[2] && blogs[3]) {
        let upDatedBlog1 = [];
        let thirdBlog = blogs[2];
        let fourthBlog = blogs[3];
        upDatedBlog1.push(thirdBlog, fourthBlog);
        const blogContainer = document.querySelector(".container-blog.blog2");
        let element = "";
        upDatedBlog1.forEach((rec) => {
            element += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
                
                `;
        });
        blogContainer.innerHTML = element;
    }
    if (blogs.length > 4) {
        const blogContainer = document.querySelector(".container-blog.blog2");
        let upDatedBlog1 = [];
        let fifthBlog = blogs[4];
        upDatedBlog1.push(fifthBlog);
        let element = "";
        upDatedBlog1.forEach((rec) => {
            element += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                        <a href="" style="margin-left: 30px;">Read more</a>
                        <a href=""><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                </div>
                
                `;
        });
        blogContainer.innerHTML = element;
    }
}
else {
    alert("no blogs found");
}
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const messages = document.getElementById('message');
const errorMessage = document.getElementById('errorProvidedMessage');
const form = document.getElementById('form');
fullName.style.paddingLeft = '20px';
email.style.paddingLeft = '20px';
messages.style.padding = '30px';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    if (fullNameValue.trim() === "") {
        fullName.style.border = '1px solid red';
        errors.push("please provide Your full name");
    }
    else {
        fullName.style.border = 'black';
    }
    if (!(emailValue.includes("@"))) {
        email.style.border = '1px solid red';
        errors.push("invalid email");
    }
    else {
        fullName.style.border = 'black';
    }
    if (emailValue.trim() === "") {
        email.style.border = '1px solid red';
        errors.push("provide an email");
    }
    if (errors.length > 0) {
        errorMessage.textContent = errors.join(", ");
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '15px';
        errorMessage.style.marginBottom = '10px';
    }
    else {
        storingMessage();
        fullNameValue = '';
        emailValue = '';
        Notification.requestPermission()
            .then((permis) => {
            if (permis === 'granted') {
                const notification = new Notification('New Message', {
                    body: " New Inquiry from contact me",
                    icon: "../images/Myimage.jpg"
                });
                setTimeout(() => {
                    notification.close();
                }, 3000);
            }
        });
    }
});
function storingMessage() {
    const storedData = localStorage.getItem('contactMessage');
    const messageObj = storedData ? JSON.parse(storedData) : [];
    const inputName = document.getElementById('full-name');
    const inputNameValue = inputName.value;
    const inputEmail = document.getElementById('email');
    let inputEmailValue = inputEmail.value;
    const inputMessage = document.getElementById('message');
    const inputMessageValue = inputMessage.value;
    const newMessage = {
        id: messageObj.length + 1,
        name: inputNameValue,
        email: inputEmailValue,
        message: inputMessageValue
    };
    messageObj.push(newMessage);
    localStorage.setItem('contactMessage', JSON.stringify(messageObj));
    return localStorage;
}
storingMessage();
function displayProjectsInPage() {
    const projectstored = JSON.parse(localStorage.getItem('projects') || '[]');
    const projectContainer = document.querySelector(".projects-section-container");
    let elem = "";
    projectstored.forEach((pro) => {
        elem += `
        <div class="project-div3 single-project">
            <h1>${pro.title}</h1>
            <p>${pro.description}</p>
            <button>DEMO</button>
        </div>
        `;
    });
    projectContainer.innerHTML = elem;
}
displayProjectsInPage();
//# sourceMappingURL=portfolio.js.map