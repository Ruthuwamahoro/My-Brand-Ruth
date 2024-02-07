// import 'core-js/features/string/includes';

//make navigation menu responsive
//get menu from DOM and add event listener for click on it
const menu = document.getElementById("menu")! as HTMLAnchorElement;
const ul = document.querySelector(".display-menu")! as HTMLUListElement;
menu.addEventListener("click", (e) => {

    //check if menu is already open or closed, then perform appropriate action

    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        e.preventDefault();
        ul.classList.toggle("show-menu");
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    //check if menu is already open or closed, then perform appropriate action

    if (menu.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        menu.addEventListener("click", () => {
            ul.classList.remove("display-menu")
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    }
})


//working with blogs and display it in the portfolio
//creating interface for the record of blog stored in local storage
interface recV {
    title: string;
    description: string;
}
//retrieving datas from local storage and check if it exists
const blogsContent = localStorage.getItem("blogContent");
const blogs: recV[] | null = blogsContent?JSON.parse(blogsContent) : null;
const blogContainer = document.querySelector(".container-blog")! as HTMLDivElement;
let element:string = "";
//loop through blogs
blogs?.forEach((rec:recV) => {
    element += `
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
blogContainer.innerHTML = element;

//end of working with blogs



//validating form for invalid input
//get an input from DOM by its name attribute
const fullName = document.getElementById('full-name')! as HTMLInputElement;
const email = document.getElementById('email')! as HTMLInputElement;
const messages = document.getElementById('message')! as HTMLTextAreaElement;
const errorMessage = document.getElementById('errorProvidedMessage')! as HTMLParagraphElement;
const form = document.getElementById('form')! as HTMLFormElement;
//adding some padding to the form input
fullName.style.paddingLeft = '20px';
email.style.paddingLeft = '20px';
messages.style.padding = '30px';
//end of padding

//add event listener to form
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let errors:string[] = [];
    let fullNameValue: string = fullName.value;
    let emailValue: string = email.value;
    //check if input is empty
    if(fullNameValue.trim() === ""){
        fullName.style.border = '1px solid red';
        errors.push("please provide Your full name");
    } else {
        fullName.style.border = 'black';
    }
    //check if email is valid
    if (!(emailValue.includes("@"))){
        email.style.border = '1px solid red';
        errors.push("invalid email")
    } else {
        fullName.style.border = 'black';
    }
    //check if input is empty
    if (emailValue.trim() === ""){
        email.style.border = '1px solid red';
        errors.push("provide an email")
    }
    //check if errors array is greater than 0 and apply relevant styling
    if (errors.length > 0){
        errorMessage.textContent = errors.join(", ")
        errorMessage.style.color='red';
        errorMessage.style.fontSize = '15px';
        errorMessage.style.marginBottom = '10px';
    } else {
        storingMessage();
        fullNameValue = '';
        emailValue = '';
        // let messages: string = '';
        Notification.requestPermission()
            .then((permis) => {
                if (permis === 'granted') {
                    const notification = new Notification('New Message', {
                        body: " New Inquiry from contact me",
                        icon: "images/Myimage.jpg"
                    })
                    setTimeout(() => {
                        notification.close()
                    }, 3000)
                }
            })
        
    }

})


//function to get data from local storage if any exists or create new one and store it in localstorage
function storingMessage(): void{
    const storedData = localStorage.getItem('contactMessage');
    const messageObj = storedData ? JSON.parse(storedData) : [];
    const inputName = document.getElementById('full-name')! as HTMLInputElement;
    const inputNameValue: string = inputName.value;
    const inputEmail = document.getElementById('email') as HTMLInputElement;
    let inputEmailValue: string = inputEmail.value
    const inputMessage = document.getElementById('message') as HTMLInputElement;
    const inputMessageValue: string = inputMessage.value;
    interface message {
        id:number,
        name:string,
        email:string,
        message:string
    }
    const newMessage: message = {
        id:messageObj.length+1,
        name:inputNameValue,
        email:inputEmailValue,
        message:inputMessageValue
    }
    messageObj.push(newMessage);
    localStorage.setItem('contactMessage', JSON.stringify(messageObj))
}
