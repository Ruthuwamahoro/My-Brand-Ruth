function DisplayComment() {
    console.log("Display Blog Content---------")
    const [getComment, setgetComment] = React.useState(null);
    const useEffect = React.useEffect;
    const getUrlFromPage = window.location.href
    const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
    const id = geturlParams.get('id')
    localStorage.setItem('blogId', id)
    const getId = localStorage.getItem('blogId')
    const singleComment = async(id) => {
        console.log(id)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        try{
            const response = await fetch(`https://brand-backend-side.onrender.com/post/getsinglepost/${id}`, {
                method:'GET',
                headers:headers
            });
            const data = await response.json();
            setgetComment(data.data.comments);
        } catch(err){
            console.log(err)
        }
    }

    const HandlePostComment = async() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if(!token){
            alert("Please login to post comment")
            window.location.href = '../UI/login-page/login.html'
        }
        const receivedInput = document.getElementById('comment-input').value;
        console.log(receivedInput)
        const accessToken = token.token
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append(`Authorization`, `Bearer ${accessToken}`)
        try{
            const inputData = {
                commentMessage: receivedInput
            }
            const response = await fetch(`https://brand-backend-side.onrender.com/api/blog/${getId}/postcomment`, {
                method:'POST',
                headers:headers,
                body:JSON.stringify(inputData)
            });
            const data = await response.json();
            console.log(data);
            window.location.reload();
            
        }catch (error) {
            console.log(error)
        }
    }

    
    
    useEffect(() => {
        singleComment(id);
        HandlePostComment()

    }, [])
    
    console.log("??????????", getComment ? getComment.length : 0)

    const numberCommentStyle = {
        display: "flex",
        justifyContent: "flex-start",
        marginLeft: "50px",
        marginTop: "10px",
        marginBottom: "20px"
    }
    const imageStyle = {
        width: "50px",
        height: "50px",
        marginTop: "10px",
        border: "2px solid black",
        borderRadius: "50%"
    }
    const time = {
        marginLeft: "35px",
        fontSize: "21px",
        color: "gray"
    }
    const commentMessage = {
        marginTop: "10px",
        marginBottom: "20px",

    }
    const replyStyle = {
        marginLeft: "20px",
        fontSize: "17px",
        position: "relative",
        bottom: "5px"
    }
    
    console.log("comments", getComment);

    function displayTime(timeStamp){
        const getCurrentTime = new Date()
        const getDifference = getCurrentTime-timeStamp
        const getCurrentSeconds = Math.floor(getDifference/1000)
        const getMinutes = Math.floor(getCurrentSeconds/60)
        const getHours = Math.floor(getMinutes/60)
        const getDays = Math.floor(getHours/24)
        if(getCurrentSeconds < 60){
            return "Just now"
        } else if (getMinutes === 1){
            return `${getMinutes} minute ago`
    
        } else if(getMinutes < 60){
            return `${getMinutes} minutes ago`
        } else if (getHours === 1){
            return `${getHours} hour ago`
        } else if(getHours < 24){
            return `${getHours} hours ago`
        } else if(getDays === 1){
            return `${getDays} day ago`
        } else {
            return `${getDays} days ago`
        }
    
    }

    
    return(
 
            <div style={{ marginTop: "100px"}} >
                     <div>
                        <div style={{marginTop: "100px"}}>
                            <div>
                                <span syle={numberCommentStyle}>
                                    <span><h3 style={{fontWeight: "900px", marginLeft: "50px", marginTop: "10px", marginBottom: "20px"}} id="comment-count">{getComment ? getComment.length : 0} comments</h3></span>
                                </span>
                                
                                <div style={{display: "flex"}}>
                                    <img src="../my-brand/images/unknown.png" style={imageStyle}/>
                                    <div style={{marginLeft: "20px"}}>
                                        <input placeholder="Add Comment" id="comment-input"/>
                                        <button  type="submit" id="submit-comment" onClick={ HandlePostComment}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {getComment && getComment.map((comment) => {
                            
                            return(
                                <div id="mainCommentContainer">
                                    <div style={{display: "flex", marginTop: "40px"}}>
                                        <img src="../my-brand/images/unknown.png" style={imageStyle}/>
                                        <div style={{marginLeft: "20px"}}>
                                            <span>{comment.username}</span>
                                            <span style={time}>{displayTime(new Date(comment.created_at))}</span>
                                            <p style={commentMessage}>{comment.commentMessage}</p>
                                            <div class="doc">
                                                <span><i class="fa-regular fa-heart" style={{color:"black", cursor: "pointer"}}></i></span>
                                                <span style={{marginTop: "30px", marginLeft: "10px"}}><i class="fa-solid fa-comment" style={{marginLeft: "20px", cursor: "pointer"}}></i></span>
                                                <span><i class="fa-solid fa-share" style={{marginLeft: "20px", cursor: "pointer"}}></i></span>
                                                <span style={replyStyle}>Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                     </div>
                 </div>

    )
    

    
}


ReactDOM.render(<DisplayComment/>, document.querySelector("#comment-section"))