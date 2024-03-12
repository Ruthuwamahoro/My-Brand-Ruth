"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputName = document.getElementById('full-name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const submission = document.getElementById('send');
const errorMessage = document.getElementById('errorProvidedMessage');
submission.addEventListener("click", (e) => {
    e.preventDefault();
    function fetchingData() {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            const defineHeaders = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ fullName: inputName.value, email: inputEmail.value, message: inputMessage.value })
            };
            try {
                const response = yield fetch('https://brand-backend-side.onrender.com/contact/contactmessage', defineHeaders);
                const data = yield response.json();
                const erro = data.error;
                console.log(erro);
                if (erro) {
                    errorMessage.style.color = 'red';
                    errorMessage.textContent = erro;
                }
                else {
                    errorMessage.style.display = 'none';
                    Notification.requestPermission()
                        .then((permis) => {
                        if (permis === 'granted') {
                            const notification = new Notification('New Message', {
                                body: " New Inquiry from contact me",
                                icon: "../UI/admin/images/Myimage.jpg",
                            });
                        }
                    });
                    inputEmail.value = "";
                    inputName.value = "";
                    inputMessage.value = "";
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    fetchingData();
});
function displayBlog() {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const customization = {
            method: 'GET',
            headers: headers
        };
        try {
            const response = yield fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', customization);
            const blogs = yield response.json();
            console.log(blogs.data[0]);
            const blog = blogs.data;
            console.log(blog);
            if (blog[0] && blog[1]) {
                const getContainer = document.querySelector('.container-blog.blog1');
                let makeNewBlogArr = [];
                const firstBlo = blog[0];
                const secondBlo = blog[1];
                makeNewBlogArr.push(firstBlo, secondBlo);
                let elem = '';
                makeNewBlogArr.forEach((rec) => {
                    elem += `
                <div>
                <h1>${rec.title}</h1>
                <p>${rec.description}</p>
                <div id="read-more">
                <a href="#" onclick="goToMainBlog('${rec._id}')" style="margin-left: 30px;">Read more</a>
                <a href="#" onclick="goToMainBlog('${rec._id}')"><i class="fa-solid fa-circle-right"></i></a>
                </div>
                </div>
                
                `;
                });
                getContainer.innerHTML = elem;
            }
            if (blog[2] && blog[3]) {
                const getContainer = document.querySelector('.container-blog.blog2');
                let makeNewBlogArr = [];
                const firstBlo = blog[2];
                const secondBlo = blog[3];
                makeNewBlogArr.push(firstBlo, secondBlo);
                let elem = '';
                makeNewBlogArr.forEach((rec) => {
                    elem += `
                <div>
                    <h1>${rec.title}</h1>
                    <p>${rec.description}</p>
                    <div id="read-more">
                    <a href="#" onclick="goToMainBlog('${rec._id}')" style="margin-left: 30px;">Read more</a>
                    <a href="#" onclick="goToMainBlog('${rec._id}')"><i class="fa-solid fa-circle-right"></i></a>
                    </div>
                    </div>
                    
                    `;
                });
                getContainer.innerHTML = elem;
            }
            if (blog[4] && blog[5]) {
                const getContainer = document.querySelector('.container-blog.blog3');
                let makeNewBlogArr = [];
                const firstBlo = blog[4];
                const secondBlo = blog[5];
                makeNewBlogArr.push(firstBlo, secondBlo);
                console.log(makeNewBlogArr);
                let elem = '';
                makeNewBlogArr.forEach((rec) => {
                    elem += `
                <div>
                <h1>${rec.title}</h1>
                <p>${rec.description}</p>
                <div id="read-more">
                <a href="#" onclick="goToMainBlog('${rec._id}')" style="margin-left: 30px;">Read more</a>
                <a href="#" onclick="goToMainBlog('${rec._id}')"><i class="fa-solid fa-circle-right"></i></a>
                </div>
                </div>
                
                `;
                });
                getContainer.innerHTML = elem;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
displayBlog();
function goToMainBlog(id) {
    return __awaiter(this, void 0, void 0, function* () {
        window.location.href = `https://ruthuwamahoro.github.io/My-Brand-Ruth/UI/blogs/blog1.html?id=${id}`;
        //window.location.href=`http://localhost:5501/UI/blogs/blog1.html?id=${id}`;
    });
}
function displayProjectsInPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const customization = {
            method: 'GET',
            headers: headers
        };
        const project = yield fetch('https://brand-backend-side.onrender.com/project/getallprojects', customization);
        const n = yield project.json();
        const projectstored = n.projects;
        console.log("-------------", projectstored);
        let projectContainer = document.querySelector(".projects-section-container");
        let elem = "";
        projectstored.forEach((pro) => {
            elem += `
        <div class="project-div3 single-project">
            <h1>${pro.title}</h1>
            <p>${pro.description}</p>
            <button ><a href="${pro.demo}">Demo</a></button>
        </div>
        `;
        });
        projectContainer.innerHTML = elem;
    });
}
displayProjectsInPage();
