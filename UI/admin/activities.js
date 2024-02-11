let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}


const blogsMove = JSON.parse(localStorage.getItem("blogContent"));

if (blogsMove) {
    let previousBlogLength = localStorage.getItem("previousBlogLength") || 0;
    if (blogsMove.length > previousBlogLength) {
        const newBlog = blogsMove[blogsMove.length - 1];
        let blogActHistory = JSON.parse(localStorage.getItem("blogsActivityHistory")) || [];
        blogActHistory.push(newBlog);
        localStorage.setItem("blogsActivityHistory", JSON.stringify(blogActHistory));
        localStorage.setItem("previousBlogLength", blogsMove.length);
        
    } 
}
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
displayAddedBlogHis()

function displayUpdatedBlog(){

}







