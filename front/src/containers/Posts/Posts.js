import React, {useEffect} from 'react';
import PostCard from "../../components/PostCard/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postActions";
import './Posts.css';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const printPosts = () => {
        return posts.map(posts => {
            return (
                <PostCard
                    key={posts._id}
                    id={posts._id}
                    date={posts.date}
                    username={posts.userId.username}
                    title={posts.title}
                    image={posts.file}
                />
            )
        })
    };

    return (
        <div className="posts">
            {printPosts()}
        </div>
    );
};

export default Posts;