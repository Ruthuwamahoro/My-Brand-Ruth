document.getElementById('container').style.display = 'none'
//document.getElementsByClassName('empty-blog').style.display = 'none'
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
        const result = await fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', defineCustoms)
        const response = await result.json()
        const blog = response.data
        document.getElementById('container').style.display = 'none'
        const emptyBlog = document.querySelector('.empty-blog');
        const mainDiv = document.getElementById('blogs-container-actions');
        const updateBlogHtml = document.getElementById('addblog-container')
        updateBlogHtml.style.display = 'none';
        let elements = "";
        if(blog.length == 0){
        emptyBlog.style.display = 'block'
        mainDiv.style.display = 'none'
        }
        else 
        {   emptyBlog.style.display = 'none'
            blog.map((record) => {
                elements += `<div class="main-container">
                    <div class="container-action">
                        <p id="title"> ${record.title}</p>
                        <button class="update-btn" onclick=update('${record._id}')>UPDATE</button>
                        <button class="delete-btn" onclick=deleteBlog('${record._id}')>DELETE</button>
                    </div>
                </div>`
                
                
            })
            mainDiv.innerHTML = elements
        }




    }
    fetchingData()

})


async function deleteBlog(id){

    const deleteMessage = document.getElementById('container');
    deleteMessage.style.display = 'block';
    if(deleteMessage){
        document.getElementById('navigation-menu-section').classList.add('body-opacity');
        document.getElementById('navigation-link-container').classList.add('body-opacity');
        document.getElementById('blogs-section').classList.add('body-opacity');
        document.getElementById('addblog-container').classList.add('body-opacity');

    }
        document.getElementById('cancel-button').addEventListener(('click'), (e) => {
        e.preventDefault()
        deleteMessage.style.display = 'none';
        document.getElementById('navigation-menu-section').classList.remove('body-opacity');
        document.getElementById('navigation-link-container').classList.remove('body-opacity');
        document.getElementById('blogs-section').classList.remove('body-opacity');
        document.getElementById('addblog-container').classList.remove('body-opacity');
    })
    document.getElementById('del').addEventListener('click', (e) => {
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
        //console.log(defineCustoms)
        try{
            const response = fetch(`https://brand-backend-side.onrender.com/post/deletepost/${id}`, defineCustoms)

            deleteMessage.style.display = 'none';
            document.getElementById('navigation-menu-section').classList.remove('body-opacity');
            document.getElementById('navigation-link-container').classList.remove('body-opacity');
            document.getElementById('blogs-section').classList.remove('body-opacity');
            document.getElementById('addblog-container').classList.remove('body-opacity');
            const data = response.json()
            //console.log(data)
        } catch(error){
            console.log(error)
        }
    })

    
}













async function update(id){
    try{
        document.getElementById('blogs-section').style.display = 'none';
        document.querySelector('#addblog-container').style.display = 'block';

        const token = JSON.parse(localStorage.getItem("token"));
        const getToken = token.token
        const result = await fetch(`https://brand-backend-side.onrender.com/post/getsinglepost/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })
        const data = await result.json()
    
        document.getElementById('utitle').value = data.data.title;
        document.getElementById('ucontent').value = data.data.content;
        document.getElementById('udescription').value = data.data.description;
        document.querySelector('.id').value = data.data._id;
        document.getElementById('submit2').addEventListener('click', (e) => {
            e.preventDefault()
            let newId = document.querySelector('.id').value;
            let newTitle = document.getElementById('utitle').value;
            let newContent = document.getElementById('ucontent').value;
            let newDescription = document.getElementById('udescription').value; 
    
            const updateBlog = {
                id: newId,
                title: newTitle,
                content: newContent,
                description: newDescription
            }
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Authorization', `Bearer ${getToken}`);
            const defineCustoms = {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(updateBlog)
            }
            console.log(defineCustoms.body)
            fetch(`https://brand-backend-side.onrender.com/post/updatepost/${id}`, defineCustoms)
            alert('Blog updated successfully')
            window.location.href = './addblogs.html'
        })
    } catch(error){
        console.log(error)
    }
}