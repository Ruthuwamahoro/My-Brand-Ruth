let token = JSON.parse(localStorage.getItem("token"));
if (!token || !token.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//initialize the current length and is updated depend on the blogs added
//at the initial stage is empty and it has zero and as we add new blog is updated to the length of blog
let currentLength = JSON.parse(localStorage.getItem("previousBlogLength")) || 0; // Initialize currentLength to zero
console.log('Initial currentLength:', currentLength);

const blogsMove = JSON.parse(localStorage.getItem("blogContent")) || [];

if (blogsMove.length > currentLength) {
    console.log('Length of blogsMove increased');
     // Update currentLength with the new length of blogsMove
     //retrieving the current storage
    let blogActHistory = JSON.parse(localStorage.getItem("blogsActivityHistory")) || [];
    //retrieve the last blog added
    const newBlog = blogsMove[blogsMove.length - 1];
    //push it to the storage of the last added blog
    blogActHistory.push(newBlog);
    localStorage.setItem("blogsActivityHistory", JSON.stringify(blogActHistory));
    //updating blog to the length of the blog
    currentLength = blogsMove.length;
    localStorage.setItem("previousBlogLength", JSON.stringify(currentLength));
    displayAddedBlogHis()
}





//displaying blog to the page
function displayAddedBlogHis(){
    const storedHistory = JSON.parse(localStorage.getItem("blogsActivityHistory"));
    console.log(storedHistory)
    const tb = document.querySelector("#tbodyActivity");
    let elementActivity = '';
    storedHistory.forEach((blogAct) => {
        //add some style
        elementActivity += `
            <tr>
            <td >you have added new blog:<span style=" font-weight: bold;">“${blogAct.title}”</span></td>
            <td>${blogAct.updatedAt}</td> 
            </tr>
        `;
    })
    tb.innerHTML = elementActivity;
    
}
//ensure that when the page is reloaded it displays also relevant function related to it.
window.addEventListener(('load'),() => {
    displayAddedBlogHis()
})










