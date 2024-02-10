//working on comment section
function load(){
    const comment = JSON.parse(localStorage.getItem("storedComment")||"[]");
    displayComment(comment)
}

function postComment(){
    const comment = JSON.parse(localStorage.getItem("storedComment")||"[]");
    const inputComment = document.getElementById("comment-section").value;
    const image = document.getElementById("imagen");
    const getSrc = image.getAttribute("src")
    const date = new Date().toLocaleString()
    const store = {
        id: comment.length + 1,
        commentPost: inputComment,
        image: getSrc,
        addedAt: date,
    }
    comment.push(store);
    localStorage.setItem("storedComment", JSON.stringify(comment));
    const n = JSON.parse(localStorage.getItem("storedComment"));
}

function displayComment (){
    
    const comment = JSON.parse(localStorage.getItem("storedComment")) || [];
    const commentContainer = document.getElementById("commentedMessage");
    try{
        let elem = "";
        comment.forEach((en)=>{
            elem += `
            <div class="com">
                <img src="${en.image}" alt="" style="width: 50px; height: 50px; border-radius: 50% ;"/>
                <div>
                    <p id="comm">${en.commentPost}</p>
                    <span><i class="fa-regular fa-thumbs-up"></i></span>
                    <span><i class="fa-regular fa-thumbs-down"></i></span>
                    <a href="" id="reply-${en.id}" class="reply-link"><i class="fa-solid fa-reply"></i></a>
                    <span id="messagem" > ${en.addedAt}</span>
                    <div id="replyOnPost" class="reply-container" hidden>
                    <img src="../images/Myimage.jpg" alt="" style="width: 30px; height: 30px; border-radius: 50%">
                    <input type="text"/>
                    <button id="replyButton">Reply</button>
                    </div>                
                </div>
            </div>
            `
            
        })
        commentContainer.innerHTML = elem;
        const doc = document.querySelectorAll(".reply-link");
        doc.forEach((n) => {
            const rep = document.getElementById("reply-1");
            rep.addEventListener(('click'), () => {
                 
            })
        })
        
        // reply button event listener
        document.getElementById("replyButton").addEventListener("click", () => {
            // Add your code here for the event listener
        });

    }catch(error){
        console.log(error)
    }
}

window.addEventListener("load", () => {
    load()
})

//reply on comment














//display number of comments
const numberComment = document.getElementById("number-comment");
const commentLength = JSON.parse(localStorage.getItem("storedComment")) || [];
numberComment.innerHTML = commentLength.length;
console.log(commentLength.length)





