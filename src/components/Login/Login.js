import React from 'react';
import './Login.css'; // Import the CSS file
import Button from '../Button/Button'

const Login = () => {
    return (
        <div className='loginbody'>
        <div className="main">
            <input className='logininput' type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label  className="loginlabel" htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input className='logininput' type="text" name="txt" placeholder="User name" required />
                    <input  className='logininput' type="email" name="email" placeholder="Email" required />
                    <input  className='logininput' type="password" name="pswd" placeholder="Password" required />
                    <Button label="Signup" width='234px' height='34px'  className="button-login" fontSize='2rem'/>
                </form>
            </div>

            <div className="login">
                <form>
                    <label  className="loginlabel" htmlFor="chk" aria-hidden="true">Login</label>
                    <input className='logininput' type="email" name="email" placeholder="Email" required />
                    <input  className='logininput'type="password" name="pswd" placeholder="Password" required />
                    <Button label="Login" width='234px' height='34px'  className="button-login" fontSize='2rem' />
                </form>
                <Button label="Create New Account" width='234px' height='34px' className="button-create-account" fontSize='2rem' />
            </div>
        </div>
        </div>
    );
};

export default Login;
