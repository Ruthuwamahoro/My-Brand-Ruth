document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    
    const button = document.getElementById('confirm')
    //console.log(data)
    button.addEventListener('click', async(e) => {
        
        e.preventDefault()
        let newTitle = document.getElementById("title");
        let newDescription = document.getElementById("description");
        const demo = document.getElementById('demo')
        const data = {
            title: newTitle.value,
            description: newDescription.value,
            demo : demo.value
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
            const response = await fetch("https://brand-backend-side.onrender.com/project/postproject", postingData);
            const data = await response.json();
            console.log(data)
            if(data){
                alert(`Success! ${data}`)
                window.location.href = "./projectoverview.html";
            }else{
                alert(`Error! ${data}`)
            }
            
        } catch(err){
            console.log(err)

        }
        
    })



})

//document.getElementById('container').style.display = 'none'


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    async function fetchingData(){
        const token = JSON.parse(localStorage.getItem("token"));
        const getToken = token.token
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${getToken}`);
        const defineCustoms = {
            method: 'GET',
            headers: headers,
        }
        const result = await fetch('https://brand-backend-side.onrender.com/project/getallprojects', defineCustoms)
        const response = await result.json()
        const project = response.projects
        const emptyproject = document.querySelector('.empty-project');
        const mainDiv = document.getElementById('projects-container-actions');
        let elements = "";
        if(project.length == 0){
        emptyproject.style.display = 'block'
        mainDiv.style.display = 'none'
        }
        else 
        {   emptyproject.style.display = 'none'
            project.map((record) => {
                elements += 
                `<div class="main-container">
                    <div class="container-action">
                        <p id="title"> ${record.title}</p>
                        <button class="delete-btn" onclick=deleteProject('${record._id}')><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`
                
                
            })
            mainDiv.innerHTML = elements
        }




    }
    fetchingData()

    

})

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

})
async function deleteProject(id){
    document.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.preventDefault()

        const token = JSON.parse(localStorage.getItem("token"));
        const getToken = token.token
        console.log(getToken)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${getToken}`);
        const defineCustoms = {
            method: 'DELETE',
            headers: headers,
        }
        console.log(defineCustoms)
        try{
            const response = fetch(`https://brand-backend-side.onrender.com/project/deleteproject/${id}`, defineCustoms)
            const data = response.json()
            console.log(data)
        } catch(error){
            console.log(error)
        }
    })

    
}







