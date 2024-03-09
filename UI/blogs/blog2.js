const clickLike = document.querySelector("#fa-regular");
const clickLiken = document.querySelector("#fa-solid");
clickLike.addEventListener(('click'), (e) => {
    e.preventDefault()
    clickLike.style.display = 'none';
    clickLiken.style.display = 'block';
    
})

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
})
