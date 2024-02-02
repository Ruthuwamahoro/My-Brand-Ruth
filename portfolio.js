const menu = document.getElementById("menu");
const ul = document.querySelector(".display-menu");
menu.addEventListener("click", (e) => {
    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        e.preventDefault();
        ul.classList.toggle("show-menu");

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    if (menu.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        menu.addEventListener("click", (e) => {
            ul.classList.remove("display-menu")
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });
    }
});


const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const messages = document.getElementById('message')
const errorMessage = document.getElementById('errorProvidedMessage')
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    errors = []
    if(fullName.value.trim() === ""){
        fullName.style.border = '1px solid red';
        errors.push("please provide Your full name");
    } else {
        fullName.style.border = 'black';
    }
    if (!(email.value.includes("@"))){
        email.style.border = '1px solid red';
        errors.push("invalid email")
    } else {
        fullName.style.border = 'black';
    }
    if (email.value.trim() === ""){
        email.style.border = '1px solid red';
        errors.push("provide an email")
    }
    
    
    if (errors.length > 0){
        errorMessage.textContent = errors.join(", ")
        errorMessage.style.color='red';
        errorMessage.style.fontSize = '15px';
        errorMessage.style.marginBottom = '10px';
    } else {
        window.location.href = "loading.html"
        
    }
})