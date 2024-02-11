//authenticate the page
let users = JSON.parse(localStorage.getItem("StoreUsers") || '[]')
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}

//display activities done on blog
interface blog{
    id: number;
    title: string;
    description: string;
    content: string;
    updatedAt: string;

}
const blogsMove:blog[] = JSON.parse(localStorage.getItem("blogContent") || '[]');

if (blogsMove) {
    let previousBlogLength:number = parseInt(localStorage.getItem("previousBlogLength") || '0');
    if (blogsMove.length > previousBlogLength) {
        const newBlog = blogsMove[blogsMove.length - 1];
        let blogn = localStorage.getItem("blogsActivityHistory")
        let blogActHistory: blog[]= blogn ?JSON.parse(blogn) : [];
        blogActHistory.push(newBlog);
        localStorage.setItem("blogsActivityHistory", JSON.stringify(blogActHistory));
        localStorage.setItem("previousBlogLength", blogsMove.length);
        
    } 
}

function displayAddedBlogHis(){
    const T = localStorage.getItem("blogsActivityHistory");
    const storedHistory:blog[] = T ? JSON.parse(T) : [];
    console.log(storedHistory)
    const tb = document.querySelector("#tbodyActivity") as HTMLTableElement;
    let elementActivity: string = '';
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

