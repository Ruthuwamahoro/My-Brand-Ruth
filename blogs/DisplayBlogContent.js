function DisplayBlogContent() {
    console.log("Display Blog Content")
    const [getContent, setgetContent] = React.useState(null);
    const useEffect = React.useEffect;
    const getUrlFromPage = window.location.href
    const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
    const id = geturlParams.get('id')
    localStorage.setItem('blogId', id)
    localStorage.getItem('blogId')
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
    if(getContent){
        return (
            <div>
                <p>{getContent.content}</p>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

ReactDOM.render(<DisplayBlogContent/>, document.querySelector("#main-content-of-blog"))