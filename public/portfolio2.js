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
                //const n = erro.split(',').map((item:string) => item.trim());
                //console.log(n)
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
// fetch("http://localhost:8080/contact/contactmessage", {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: inputName.value,
//         email: inputEmail.value,
//         message: inputMessage.value
//     })
// }).then((result) => result.json()).then((data) => console.log(data))
