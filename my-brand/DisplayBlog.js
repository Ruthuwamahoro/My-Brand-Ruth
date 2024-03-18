function DisplayingBlogOnPage(){
    console.log("hello data")
    const [blogPost, setblogPost] = React.useState(null);
    const useEffect = React.useEffect;

    const fetchingData = async() => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const setCustomization = {
            method: 'GET',
            headers: headers
        }
        try{
            const response = await fetch('https://brand-backend-side.onrender.com/post/retrieveallpost', setCustomization);
            const data = await response.json();
            setblogPost(data.data);
        } catch(err){
            console.log(err)
        }
    }



    useEffect(() => {
        fetchingData();
    }, [])

    //redirecting user when button is clicked

    const goToMainBlog = (id) => {
        window.location.href = `https://ruthuwamahoro.github.io/My-Brand-Ruth/UI/blogs/blog1.html?id=${id}`;
    }
    

    return (
        <div id="container-of-blogs">
            <div className="container-blog blog1">
                {blogPost && blogPost.slice(0, 2).map((blo) => (
                    <div>
                        <h1>{blo.title}</h1>
                        <p>{blo.description}</p>
                        <div id="read-more">
                            <a href="#" style={{ marginLeft: "30px" }} onClick={() => {
                                goToMainBlog(blo._id)
                            }}>Read more</a>
                            <a href="#" onClick={() => {
                                goToMainBlog(blo._id)
                            }}><i className="fa-solid fa-circle-right"></i></a>
                        </div>
                    </div>
                ))}
            </div>
    
            <div className="container-blog blog2">
                {blogPost && blogPost.slice(2, 4).map((blo) => (
                    <div>
                        <h1>{blo.title}</h1>
                        <p>{blo.description}</p>
                        <div id="read-more">
                            <a href="#" style={{ marginLeft: "30px" }}> onClick={() => {
                                goToMainBlog(blo._id)
                            }}Read more</a>
                            <a href="#" onClick={() => {
                                goToMainBlog(blo._id)
                            }}><i className="fa-solid fa-circle-right"></i></a>
                        </div>
                    </div>
                ))}
            </div>
    
            <div className="container-blog blog3">
                {blogPost && blogPost.slice(4, 6).map((blo) => (
                    <div>
                        <h1>{blo.title}</h1>
                        <p>{blo.description}</p>
                        <div id="read-more">
                            <a href="#" style={{ marginLeft: "30px" }} onClick={() => {
                                goToMainBlog(blo._id)
                            }}>Read more</a>
                            <a href="#" onClick={() => {
                                goToMainBlog(blo._id)
                            }}><i className="fa-solid fa-circle-right"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<DisplayingBlogOnPage/>, document.querySelector('#blogs'));
