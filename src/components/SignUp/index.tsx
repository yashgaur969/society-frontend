 import * as React from 'react';
 import './style.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';


export const SignUp: React.FC= () => {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [emailId, setEmailId] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
    const onEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailId(event.target.value);
    };
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    

 const postdata = (event: any)=>{
            event.preventDefault();
            console.log('error')
            let first = firstname;
            let second = lastname;
            let email = emailId;
            let pass = password;
            const data = {first_name:first, last_name:second, email_id:email, password:pass}
            fetch("http://127.0.0.1:5000/users/signup", {
                method: 'POST',
                body:JSON.stringify(data),
                headers : { 'Content-Type': 'application/json' } 
             }).then(res => res.json())
             .catch(error => console.error('Error:', error))
             .then(response => console.log('Success:', response)); 

             
             
        }


    return (
        
        <form onSubmit={postdata} >
            <div> <h1><strong>Society Hub</strong></h1></div>
            <div className="container">
            <h1><strong>Sign Up Page</strong></h1>
                <div><input type="text" placeholder="first-name" value={firstname} onChange={onFirstNameChange} name="firstname" id="first" /><br></br></div>
                <div><input type="text" placeholder="last-name" value={lastname} onChange={onLastNameChange} name="lastname" id="second" /><br></br></div>
                <div><input type="text" placeholder="EmailId" value={emailId} onChange={onEmailIdChange} name="email" id="email" /><br></br></div>
                <div><input type="password" placeholder="password" value={password} onChange={onPasswordChange} name="password" id="pass" /><br></br></div>
                <div><button type="submit" className="button-class" value="SIGN UP" ><Link to="/login">SignUp</Link></button></div>
                <div className="login-redirect">
                    <p>Already have an account ? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </form>
        
    );
};


