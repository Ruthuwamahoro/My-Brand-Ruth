function DisplayBlogTitleAndIntro() {
    console.log("Display Blog Content")
    const [getContent, setgetContent] = React.useState(null);
    const useEffect = React.useEffect;
    const getUrlFromPage = window.location.href
    const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
    const id = geturlParams.get('id')
    const storeId = localStorage.setItem('blogId', id)
    const getId = localStorage.getItem('blogId')
    const singleBlog = async(id) => {
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
            console.log("data", data.data);
            setgetContent(data.data);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        singleBlog(id);
    }, [])


    const imageStyle = {
        height: "76px",
        width: "75px",
        borderRadius: "50%"
    }


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
    if(getContent){
        return(
            <div>
                <h1 id="blogTit" >{getContent.title}</h1>
                <p class="additional-info">{getContent.welcomeIntro}</p>
                <div id="description-container" >
                    <img style={imageStyle}  src="../my-brand/images/Myimage.jpg" alt="My image"/>
                    <div id="short-intro">
                        <p>Ruth Uwamahoro</p>
                        <p style={{fontWeight: 900, fontSize: "16px"}} id="dateCreated">{displayTime(new Date(getContent.created_at))}</p>
                        <p id="introd">{getContent.introduction}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

ReactDOM.render(<DisplayBlogTitleAndIntro/>, document.querySelector("#blog-intro-container"))