

let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}


//quilljs


//customization of the toolbar 
let toolbarFunctionality = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean']

]



let quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarFunctionality
    },
    theme: 'snow'
})
function workingWithContent(){
    var content = quill.root.textContent;
    document.getElementById('content').value = content;
}


quill.on('text-change', function() {
    workingWithContent()
});




//end of quilljs


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    const button = document.getElementById('submit')
    button.addEventListener('click', async(e) => {
        e.preventDefault()
        let newTitle = document.getElementById("title");
        let newContent = document.getElementById("content");
        let newDescription = document.getElementById("description");
        const newshortIntro = document.getElementById('short-intro');
        const longIntro = document.getElementById('main-intro');
        const img = document.getElementById('img');
        const getFile = img.files[0];
        const formData = new FormData();
        formData.append('image', getFile);
        formData.append('title', newTitle.value);
        formData.append('content', newContent.value);
        formData.append('description', newDescription.value);
        formData.append('welcomeIntro', newshortIntro.value);
        formData.append('introduction', longIntro.value);
        const headers = new Headers()
        const token = JSON.parse(localStorage.getItem('token'))
        const getToken = token.token
        headers.append('Authorization', `Bearer ${getToken}`)
        const customization = {
            method: 'POST',
            headers: headers,
            body: formData
        }
        console.log(customization)
        try{
            const res = await fetch('https://brand-backend-side.onrender.com/post/postblog', customization)
            const data = await res.json()
            console.log(data)
            if(data.status === 'ok'){
                window.location.href = "../admin/dashboard.html"
            }else{
                alert(`Error! ${data.message}`)
            }


        } catch(err){
            console.log(err)
        }

    })
})
















