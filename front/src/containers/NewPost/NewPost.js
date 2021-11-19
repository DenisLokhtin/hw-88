import React from 'react';
import './NewPost.css'

const NewPost = () => {
    return (
        <div>
            <form className="newPost">
                <h2>Add new post</h2>
                <input type="text" placeholder="Title"/>
                <textarea cols="30" rows="10" placeholder="Description">d</textarea>
                <input type="file"/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewPost;