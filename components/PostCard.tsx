const PostCard =({Post} : {Post: any}) => {
    //tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");

    var pimage = Post.profile.picture.original.url;
    // console.log(pimage);
    pimage = pimage.replace("ipfs://", "https://ipfs.io/ipfs/");
    
    return(
        <div className="cards">
        <div className="container card-container">
            <div className="top row">
                <div className="col f-col">
                    <img src={pimage} className="pp" alt="PP" />
                </div>
                <div className="col s-col">
                    <h1 className="name">{Post.profile.name}</h1>
                    <h2 className="username">@{Post.profile.handle}</h2>
                </div>
                <div className="col t-col">
                    <p className="timestamp">{Post.createdAt}</p>
                </div>
            </div>
            <div className="middle row">
                <div className="col f-col"></div>
                <div className="col s-col">
                    <p className="text">
                    {Post.metadata.description}
                    </p>
                </div>
                <div className="col t-col"></div>
            </div>

            {/* <div className="bottom row">
                <div className="col f-col"></div>
                <div className="col s-col">
                    <a className="icon">
                        <img src="assets/icons/comment_icon.svg" alt="Comment icon" />
                    </a>
                    <a className="icon">
                        <img src="assets/icons/like_icon.svg" alt="Like icon" />
                    </a>
                    <a className="icon">
                        <img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
                    </a>
                    <a className="icon">
                        <img src="assets/icons/save_icon.svg" alt="Save icon" />
                    </a>
                </div>
                <div className="col t-col">
                    <a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
                </div>
            </div> */}
        </div>
    </div>
    )
}
export default PostCard