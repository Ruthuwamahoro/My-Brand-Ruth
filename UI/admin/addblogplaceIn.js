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
    //console.log(data)
    button.addEventListener('click', async(e) => {
        
        e.preventDefault()
        let newTitle = document.getElementById("title");
        let newContent = document.getElementById("content");
        let newDescription = document.getElementById("description");
        const newshortIntro = document.getElementById('short-intro');
        const longIntro = document.getElementById('main-intro');
        const img = document.getElementById('img').value.split("\\");
        console.log("--------------------------------------------",img[2])
        const realImg = `https://brand-backend-side.onrender.com/uploads/${img[2]}`
        console.log(realImg)
        const data = {
            title: newTitle.value,
            content: newContent.value,
            description: newDescription.value,
            welcomeIntro: newshortIntro.value,
            introduction: longIntro.value,
            image: img.value
        }
        const token = JSON.parse(localStorage.getItem('token'))
        const getToken = token.token
        console.log(getToken)
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', `Bearer ${getToken}`)
        const postingData = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }

        try{
            const response = await fetch("https://brand-backend-side.onrender.com/post/postblog", postingData);
            const data = await response.json();
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
















