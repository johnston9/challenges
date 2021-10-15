import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map((post) => {
            // destructuring 
            const { id, user, type, tags, webformatURL } = post
            return <div className={css.SearchItem} key={id}>
                <p>Artwork Type {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="random"/>
                <p>Tags{tags}</p>
            </div>
            }
        )
    )
}

export default PostItem