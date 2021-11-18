import React from 'react';
import {Link} from "react-router-dom";

const UserMenu = () => {
    return (
        <div>
            Hello, <b>(User)</b>! <Link to="/posts/new" className="link">Add new post</Link> or <span className="link">Logout</span>
        </div>
    );
};

export default UserMenu;