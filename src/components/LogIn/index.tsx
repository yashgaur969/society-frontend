import * as React from 'react';
import './style.css';

export const LogIn: React.FC = () => {
    return(
        <form>
            <div className="container">
                <label>
                    <input type="text" placeholder= "Email-Id" name="name" /><br></br>
                </label>
                <label>
                    <input type="password" placeholder= "password" name="name" /><br></br>
                </label>
                <button className="button-class">Sign Up</button>
        
                    <p><a href="forgot password">forgot password</a></p>
            </div>
        </form>
    )
}