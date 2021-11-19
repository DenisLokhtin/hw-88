import React from 'react';


const Register = () => {
    return (
        <div>
            <form className="authorization">
                <h2>Register</h2>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Register;