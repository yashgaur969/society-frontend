import * as React from 'react';
import './style.css';

export const SignUp: React.FC = () => {
    return (
        
        <form>
            <div className="container">
                    <div><input type="text" placeholder= "first-name" name="name" /><br></br></div>
                    <div><input type="text" placeholder= "last-name" name="name" /><br></br></div>
                    <div><input type="text" placeholder= "EmailId" name="name" /><br></br></div>
                    <div><input type="password" placeholder= "password" name="name" /><br></br></div>
                    <div><button className="button-class">Sign Up</button></div>
            <div className="login-redirect">
                    <p>Already have an account</p>
                    <p><a href="login">LOGIN</a></p>
            </div>
            </div>
        </form>
        
    )
}