// import 'core-js/features/string/includes';
//make navigation menu responsive
//get menu from DOM and add event listener for click on it
var menu = document.getElementById("menu");
var ul = document.querySelector(".display-menu");
menu.addEventListener("click", function (e) {
    //check if menu is already open or closed, then perform appropriate action
    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        e.preventDefault();
        ul.classList.toggle("show-menu");
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    //check if menu is already open or closed, then perform appropriate action
    if (menu.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        menu.addEventListener("click", function () {
            ul.classList.remove("display-menu");
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    }
});
//retrieving datas from local storage and check if it exists
var blogsContent = localStorage.getItem("blogContent");
var blogs = blogsContent ? JSON.parse(blogsContent) : null;
var blogContainer = document.querySelector(".container-blog");
var element = "";
//loop through blogs
blogs === null || blogs === void 0 ? void 0 : blogs.forEach(function (rec) {
    element += "\n        <div>\n            <h1>".concat(rec.title, "</h1>\n            <p>").concat(rec.description, "</p>\n            <div id=\"read-more\">\n                <a href=\"\" style=\"margin-left: 30px;\">Read more</a>\n                <a href=\"\"><i class=\"fa-solid fa-circle-right\"></i></a>\n            </div>\n        </div>\n    ");
});
blogContainer.innerHTML = element;
//end of working with blogs
//validating form for invalid input
//get an input from DOM by its name attribute
var fullName = document.getElementById('full-name');
var email = document.getElementById('email');
var messages = document.getElementById('message');
var errorMessage = document.getElementById('errorProvidedMessage');
var form = document.getElementById('form');
//adding some padding to the form input
fullName.style.paddingLeft = '20px';
email.style.paddingLeft = '20px';
messages.style.padding = '30px';
//end of padding
//add event listener to form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var errors = [];
    var fullNameValue = fullName.value;
    var emailValue = email.value;
    //check if input is empty
    if (fullNameValue.trim() === "") {
        fullName.style.border = '1px solid red';
        errors.push("please provide Your full name");
    }
    else {
        fullName.style.border = 'black';
    }
    //check if email is valid
    if (!(emailValue.includes("@"))) {
        email.style.border = '1px solid red';
        errors.push("invalid email");
    }
    else {
        fullName.style.border = 'black';
    }
    //check if input is empty
    if (emailValue.trim() === "") {
        email.style.border = '1px solid red';
        errors.push("provide an email");
    }
    //check if errors array is greater than 0 and apply relevant styling
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
        // let messages: string = '';
        Notification.requestPermission()
            .then(function (permis) {
            if (permis === 'granted') {
                var notification_1 = new Notification('New Message', {
                    body: " New Inquiry from contact me",
                    icon: "images/Myimage.jpg"
                });
                setTimeout(function () {
                    notification_1.close();
                }, 3000);
            }
        });
    }
});
//function to get data from local storage if any exists or create new one and store it in localstorage
function storingMessage() {
    var storedData = localStorage.getItem('contactMessage');
    var messageObj = storedData ? JSON.parse(storedData) : [];
    var inputName = document.getElementById('full-name');
    var inputNameValue = inputName.value;
    var inputEmail = document.getElementById('email');
    var inputEmailValue = inputEmail.value;
    var inputMessage = document.getElementById('message');
    var inputMessageValue = inputMessage.value;
    var newMessage = {
        id: messageObj.length + 1,
        name: inputNameValue,
        email: inputEmailValue,
        message: inputMessageValue
    };
    messageObj.push(newMessage);
    localStorage.setItem('contactMessage', JSON.stringify(messageObj));
}
