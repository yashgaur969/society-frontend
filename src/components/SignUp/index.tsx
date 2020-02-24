 import * as React from 'react';
 import './style.css';
import { Component } from 'react';
import { render } from 'react-dom';



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

    

//  document.getElementById('postdata').addEventListener('submit', postdata); 

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
             }).then(res=>console.log(res))
             
        }


    return (
        
        <form onSubmit={postdata}>
            <div className="container">
                    <div><input type="text" placeholder= "first-name" value={firstname} onChange={onFirstNameChange}name="firstname" id="first"/><br></br></div>
                    <div><input type="text" placeholder= "last-name" value={lastname} onChange={onLastNameChange}name="lastname" id="second"/><br></br></div>
                    <div><input type="text" placeholder= "EmailId" value={emailId} onChange={onEmailIdChange} name="email" id="email"/><br></br></div>
                    <div><input type="password" placeholder= "password" value={password} onChange={onPasswordChange}name="password" id="pass"/><br></br></div>
                    <div><input type="submit" className="button-class" value="SEND POST" /></div>
            <div className="login-redirect">
                    <p>Already have an account</p>
                    <p><a href="login">LOGIN</a></p>
            </div>
            </div>
        </form>
        
    );
};


// 
// export default class App extends Component{

// constructor(props:IEntry){

// super(props);

// this.state={ first_name="", last_name:"", email_id="", password="" }

// }

// handleChange = (event:any) =>{

// this.setState({ [event.target.name]:event.target.value })

// }

// handleSubmit = (event:any) =>{

// event.preventDefault();


// const data = { first_name:"yashh", last_name="gaur", email_id:"yash@gmail.com", password="qwere2112"}

// fetch("http://127.0.0.1:5000/users/signup", { 
// method: 'POST',
// body: JSON.stringify(data), 

// headers:{ 'Content-Type': 'application/json' } })

// .then(res => res.json())
//  }

// render(){

// return(

// <form onSubmit={this.handleSubmit}>

// <input type="text" name="first_name" onChange={this.handleChange} />
// <input type="text" name="last_name" onChange={this.handleChange} />
// <input type="text" name="email_id" onChange={this.handleChange} />
// <input type="password" name="password" onChange={this.handleChange} />
// <input type="submit" value="SignUp" /> </form> )

// }

// }


