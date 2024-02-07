const clickLike = document.querySelector("#fa-regular");
const clickLiken = document.querySelector("#fa-solid");
clickLike.addEventListener(('click'), (e) => {
    e.preventDefault()
    clickLike.style.display = 'none';
    clickLiken.style.display = 'block';
    
})

