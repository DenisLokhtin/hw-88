import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className="authorization">
                <h2>Login</h2>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Login;