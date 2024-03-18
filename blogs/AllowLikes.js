function AllowLikes(){
    const [getContent, setgetContent] = React.useState(null);
    const useEffect = React.useEffect;
    const Liking = async() => {
        const changeIcon = document.querySelectorAll('#like')
        let count = 0
        for(let x = 0; x < changeIcon.length; x++){
            console.log(changeIcon[x].className)
            changeIcon[x].addEventListener(('click'), ()=> {
                const getCommentId = blog.data["comments"][x]._id
                console.log(getCommentId)
                fetch(`https://brand-backend-side.onrender.com/api/comment/${getCommentId}/postlike`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({count})
                }).then(() => {
                    if(changeIcon[x].className === 'fa-regular fa-heart'){
                        changeIcon[x].className = 'fa-solid fa-heart'
                        count = count + 1
                    } 
                    else if(changeIcon[x].className === 'fa-solid fa-heart'){
                        changeIcon[x].className = 'fa-regular fa-heart'
                    }
                })
            })  
            
        }
    }

    useEffect(() => {
        Liking()
    }, [])

    return true
}




ReactDOM.render(<AllowLikes/>, document.querySelector("#api-introduction"))

