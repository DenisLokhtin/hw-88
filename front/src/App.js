import Posts from "./containers/Posts/Posts";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Post from "./containers/Post/Post";
import NewPost from "./containers/NewPost/NewPost";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {Route, Switch} from "react-router-dom";
import React from "react";
import './App.css';

function App() {
    return (
        <div>
            <Toolbar/>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/posts/new" exact component={NewPost}/>
                    <Route path="/posts/:id" exact component={Post}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
        </div>
    );
}

export default App;
