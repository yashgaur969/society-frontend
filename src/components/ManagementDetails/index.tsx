import * as React from 'react';
import './style.css';


export const ManagementDetails: React.FC= () => {
    const [managername, setManagerName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [emailId, setEmailId] = React.useState('');


    const onManagerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setManagerName(event.target.value);
    };
    const onContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContact(event.target.value);
    };
    const onEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailId(event.target.value);
    };

    const postManagementdata = (event: any)=>{
        event.preventDefault();
        console.log('error')
        let manager = managername;
        let contact_no = contact;
        let email = emailId;
        const data = {name:manager, contact:contact_no, email_id:email}
        fetch("http://127.0.0.1:5000/users/managementDetails", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => console.log(res))
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 

         
         
    }

    return (
        <form onSubmit={postManagementdata} >
            <div className="container">
            <h1><strong>Management Details</strong></h1>
                <div><input type="text" placeholder="name" value={managername} onChange={onManagerNameChange} name="name" id="first" /><br></br></div>
                <div><input type="number" placeholder="number" value={contact} onChange={onContactChange} name="contact" id="second" /><br></br></div>
                <div><input type="text" placeholder="EmailId" value={emailId} onChange={onEmailIdChange} name="email" id="email" /><br></br></div>
                <div><button type="submit" value="Submit">Create Structure</button></div>
                
            </div>
        </form>
    );
};