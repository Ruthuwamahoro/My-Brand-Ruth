// function displayBlog() {
//     const blogs = JSON.parse(localStorage.getItem('blogContent'));
//     const mainDiv = document.getElementById('blogs-container-actions');

//     blogs.forEach((blog) => {
//         //creating div for storage
//         let div1 = document.createElement('div');
//         div1.className = 'main-container';
//         let div2 = document.createElement('div');
//         div2.className = 'container-action';
//         let button1 = document.createElement('a');
//         button1.textContent = 'UPDATE';
//         button1.href = `./updateblog.html#id=${blog.id}`
//         button1.className = 'update-btn';
//         let button2 = document.createElement('a');
//         button2.textContent = 'DELETE';
//         button2.href = `./deleteblog.html#id=${blog.id}`
//         button2.className = 'delete-btn';

//         //creating p tag to store the blog
//         let p = document.createElement('p');
//         p.textContent = blog.title;
        
//         //appending paragraph to the div
//         div2.append(p);
        
//         //appending div to the div
//         div1.append(div2);
        
//         //appending div to the main div
//         mainDiv.append(div1);

//         //appending button to the div
//         div2.append(button1, button2);


       
//     });
// }









function displayBlog() {
    const blogs = JSON.parse(localStorage.getItem('blogContent'));
    const mainDiv = document.getElementById('blogs-container-actions');

    blogs.forEach((blog) => {
        //creating div for storage
        let div1 = document.createElement('div');
        div1.className = 'main-container';
        let div2 = document.createElement('div');
        div2.className = 'container-action';
        let button1 = document.createElement('a');
        button1.textContent = 'UPDATE';
        button1.href = `./updateblog.html#id=${blog.id}`
        button1.className = 'update-btn';
        let button2 = document.createElement('a');
        button2.textContent = 'DELETE';
        button2.href = `./deleteblog.html#id=${blog.id}`
        button2.className = 'delete-btn';

        //creating p tag to store the blog
        let p = document.createElement('p');
        p.textContent = blog.title;
        
        //appending paragraph to the div
        div2.append(p);
        
        //appending div to the div
        div1.append(div2);
        
        //appending div to the main div
        mainDiv.append(div1);

        //appending button to the div
        div2.append(button1, button2);


       
    });
}

//function to delete blogs
function deleteBlog(id){
    const blogs = JSON.parse(localStorage.getItem('blogContent'));
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem("blogContent",JSON.stringify(newBlogs));
    displayBlog();

}
//event listener for delete blog
document.getElementById('blogs-container-actions').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        deleteBlog(e.target.dataset.blogId);

    }

})





displayBlog();











