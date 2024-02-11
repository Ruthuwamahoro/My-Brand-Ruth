//authentication to this page
let users = JSON.parse(localStorage.getItem("StoreUsers"));
if (!users || !users.isAuthenticated) {
    window.location.href = "../login-page/login.html";
}


//projects addition



function addProject() {
    const projectsDone = JSON.parse(localStorage.getItem("projects")) || [];
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const demoLink = document.getElementById("demo").value;
    let id = projectsDone.length + 1;
    let newProject = {
        id: id,
        title: title,
        description: description,
        demoLink: demoLink,
        addedAt: new Date().toLocaleString()
    }
    projectsDone.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projectsDone));
    const n = JSON.parse(localStorage.getItem("projects"));
    console.log(n)
}
document.getElementById('confirm').addEventListener('click',(e) => {
    e.preventDefault();
    addProject();
    title.value=" ";
    description.value=" ";
    demo.value=" ";
});




