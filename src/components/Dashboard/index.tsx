import * as React from 'react';
import './style.css';


export const Dashboard: React.FC= () =>{
    const [societyData, setSocietyData] = React.useState([])
    React.useEffect(()=>{
        fetch("http://127.0.0.1:5000/societyDetails").then(response => 
        response.json().then(data =>{
            console.log(data)
        }))

    },[])

    return (
        <div></div>
    )
}