import React from 'react';
import Post from './Post/post';
import s from './posts.module.css';




const posts = (props) =>{

    let postsElements = props.postsCollection.map(p => <Post message={p.message}/>)


    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return(
        <div className={s.content_posts}>
            <div className={s.posts_add}>
                <div className={s.posts_input}>
                    <input type="text" onChange={ onPostChange } value={props.newPostText}/>
                </div>
                <div className={s.posts_actions}>
                    <button onClick={ addPost }>Send</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className={s.posts_collection}>
                {postsElements}
            </div>
        </div>
    )
}


export default posts;