import React from 'react';
import UserMenu from "../Menu/UserMenu/UserMenu";
import AnonymousMenu from "../Menu/AnonymousMenu/AnonymousMenu";
import {Link} from "react-router-dom";
import './Toolbar.css'

const Toolbar = () => {
    return (
        <div className="border">
            <div className="toolbar">
                <div className="header">
                    <Link to="/">Forum</Link>
                </div>
                <div>
                    <UserMenu/>
                    <AnonymousMenu/>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;