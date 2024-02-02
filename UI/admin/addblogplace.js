document.getElementById('blog-Form').addEventListener('submit', (e) => {
    //prevent default submission
    e.preventDefault()
    //get the value from the form
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;


    //create localstorage or reteieve the existing
    const blogs = JSON.parse(localStorage.getItem('blogContent')) || [];
    const newBlog = {
        id: uuidv4(),
        title,
        content
    }

    blogs.push(newBlog);
    localStorage.setItem('blogContent', JSON.stringify(blogs));
    alert("successfully added")
    window.location.href = './addblogs.html';
    
    
    

})

















