import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const LogIn: React.FC = () => {

    const [emailId, setEmailId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailId(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const getdata = (event: any)=>{
        event.preventDefault();
        // console.log('error')

        let email = emailId;
        let pass = password;
        const data = {email_id:email, password:pass}
        fetch("http://127.0.0.1:5000/users/login", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 
    }

    return(
        <form onSubmit={getdata}>
            <div className="container">
                    <div><input type="text" placeholder= "EmailId" value={emailId} onChange={onEmailIdChange}  name="email" id="email"/><br></br></div>
                    <div><input type="password" placeholder= "password" value={password} onChange={onPasswordChange}name="password" id="password"/><br></br></div>
                    <div><input type="submit" className="button-class" value="Next" /></div>
                    <div><p><a href="forgot password">forgot password</a></p></div>
            </div>
        </form>
    )
}
