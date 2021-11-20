import React from 'react';
import texts from '../../assets/images/texts.jpg'
import './PostCard.css'

const PostCard = (props) => {

    const image = () => {
        if (props.image) {
            return props.image
        } else {
            return texts
        }
    }

    return (
        <div className="postCard">
            <div className="image">
                <img src={image()} alt="img"/>
            </div>
            <div className="postCardInfo">
                <p><span>{props.date}</span> by <span>{props.username}</span></p>
                <p><span className="link">{props.title}</span></p>
            </div>
        </div>
    );
};

export default PostCard;
