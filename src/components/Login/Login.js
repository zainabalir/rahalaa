import React from 'react';
import './Login.css'; // Import the CSS file
import Button from '../Button/Button'

const Login = () => {
    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <Button label="Signup" width='234px' height='34px'  className="button-login" fontSize='2rem'/>
                </form>
            </div>

            <div className="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <Button label="Login" width='234px' height='34px'  className="button-login" fontSize='2rem' />
                </form>
                <Button label="Create New Account" width='234px' height='34px' className="button-create-account" fontSize='2rem' />
            </div>
        </div>
    );
};

export default Login;
