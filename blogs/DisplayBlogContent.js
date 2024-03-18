function DisplayBlogContent() {
    console.log("Display Blog Content")
    const [getContent, setgetContent] = React.useState(null);
    const useEffect = React.useEffect;
    const getUrlFromPage = window.location.href
    const geturlParams = new URLSearchParams( new URL(getUrlFromPage).search );
    const id = geturlParams.get('id')
    console.log(id)
    // const storeId = localStorage.setItem('blogId', id)
    // const getId = localStorage.getItem('blogId')
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
            //setgetContent(data.data);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        singleBlog(id);
    }, [])
    return (
        <div>
            <p>first blog </p>
            <div>
                <p>this is all about first blog</p>
                <div>
                    <h1>Introduction</h1>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<DisplayBlogContent/>, document.querySelector("#blog-intro-container"))