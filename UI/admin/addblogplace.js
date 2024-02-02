// import { v4 as uuidv4 } from '/.uuid';
// console.log(uuidv4)


// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#blogForm').addEventListener('submit', (e) => {

//         //prevent dafault submission
    
//         e.preventDefault()
    
//         //getting value form the form when it is submitted
//         AddblogContent()
    
      
    
        
        
    
//     })

// })




        
// //check if there an items in the form if not create one
 
// function AddblogContent(){
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;  

//     const blogs= JSON.parse(localStorage.getItem('blogContent')) || [];
//     //checking if the title of the blog is unique
//     const isTitleUnique = blogs.every((blog) => blog.title !== title)

//     //if it isunique it is then added to the local storage
//     if(isTitleUnique){
//         newBlog = {
//             id:uuidv4(),
//             title,
//             content
//         }
//         blogs.push(newBlog)
//         localStorage.setItem('blogContent', JSON.stringify(blogs));
//         alert("blog added")
//         console.log(localStorage.getItem('blogContent'))
//         // setTimeout(() => {
//         //     window.location.href = "addblogs.html"
//         // }, 2000)
        
//     } else {
//         alert("blog already exist")
//     }

    

// }

// //calling the function


// function displayBlog(){
//     const blogs = JSON.parse(localStorage.getItem('blogContent'));
//     //looping through the blog
//     blogs.forEach((item) => {

        
//         //accessing container
//         const blogsContainer = document.getElementById('blogs-container-actions');
//         //create div
//             const div2 = document.createElement('div')
//             div2.id = "main-container"
//             const div1 = document.createElement('div');
//             div1.id = "container-action";
//             const p = document.createElement('p');
//             p.textContent = item.title;
//             p.append(div1);
//             div1.append(div2)
//             blogsContainer.append(div2)
//             console.log(blogsContainer.innerHTML)
        
//     })

// }

// displayBlog()


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
    console.log(JSON.parse(localStorage.getItem("blogContent")))

})

















